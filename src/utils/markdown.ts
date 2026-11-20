export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  author: string;
  image?: string;
  tags?: string[];
  lang?: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

type DatedPost = Pick<BlogPostMeta, "date" | "updated">;

/** The date shown to readers: the last update when there is one, else the publication date. */
export function getDisplayDate(post: DatedPost): string {
  return post.updated || post.date;
}

/** Newest first by displayed date, then by publication date. Dates are ISO YYYY-MM-DD strings. */
export function compareByDisplayDate(a: DatedPost, b: DatedPost): number {
  return (
    getDisplayDate(b).localeCompare(getDisplayDate(a)) ||
    b.date.localeCompare(a.date)
  );
}

/** Formats an ISO date for display, anchored at midday so time zones cannot shift the day. */
export function formatPostDate(date: string, locale: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString(
    locale === "ar" ? "ar-TN" : locale,
    { year: "numeric", month: "long", day: "numeric" }
  );
}

/**
 * Parses YAML frontmatter from a markdown string.
 * Uses a line-by-line approach for maximum robustness across all OS line endings.
 */
function parseFrontmatter(raw: string): {
  data: Record<string, string | string[]>;
  content: string;
} {
  // Normalize all line endings to \n first
  const text = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  const lines = text.split("\n");
  const data: Record<string, string | string[]> = {};

  // Must start with ---
  if (lines[0].trim() !== "---") {
    return { data, content: text };
  }

  let closingIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      closingIndex = i;
      break;
    }
  }

  if (closingIndex === -1) {
    return { data, content: text };
  }

  const frontmatterLines = lines.slice(1, closingIndex);
  const content = lines
    .slice(closingIndex + 1)
    .join("\n")
    .trim();

  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (!key) continue;

    // Handle inline arrays: tags: ["a", "b", "c"]
    if (value.startsWith("[") && value.endsWith("]")) {
      const inner = value.slice(1, -1);
      data[key] = inner
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      // Strip surrounding quotes
      value = value.replace(/^["']|["']$/g, "");
      data[key] = value;
    }
  }

  return { data, content };
}

const markdownFiles = import.meta.glob("../content/blog/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const BLOG_LANGS = ["fr", "en", "ar"];

export function getAllPosts(lang = "fr"): BlogPostMeta[] {
  const posts: BlogPostMeta[] = [];

  for (const path in markdownFiles) {
    const fileContent = markdownFiles[path] as string;

    // Derive slug from path: ../content/blog/fr/my-post.md -> fr/my-post
    const slugFull = path.replace("../content/blog/", "").replace(".md", "");

    // Check if path matches requested language folder
    const parts = slugFull.split("/");
    let fileLang = "fr";
    let slug = slugFull;

    if (parts.length === 2) {
      fileLang = parts[0];
      slug = parts[1];
    }

    if (fileLang !== lang) continue;

    const { data } = parseFrontmatter(fileContent);

    posts.push({
      slug,
      lang: fileLang,
      title: (data.title as string) || "Untitled",
      date: (data.date as string) || "1970-01-01",
      updated: data.updated as string | undefined,
      description: (data.description as string) || "",
      author: (data.author as string) || "Maître Haifa Guedhami Alouini",
      image: data.image as string | undefined,
      tags: (data.tags as string[]) || [],
    });
  }

  return posts.sort(compareByDisplayDate);
}

export function getPostBySlug(
  slug: string,
  lang = "fr",
  fallbackAcrossLocales = true
): BlogPost | null {
  const localeChain = fallbackAcrossLocales
    ? [lang, ...BLOG_LANGS.filter((item) => item !== lang)]
    : [lang];

  for (const candidateLang of localeChain) {
    const path = `../content/blog/${candidateLang}/${slug}.md`;
    const fileContent = markdownFiles[path] as string;

    if (!fileContent) continue;

    const { data, content } = parseFrontmatter(fileContent);

    return {
      meta: {
        slug,
        lang: candidateLang,
        title: (data.title as string) || "Untitled",
        date: (data.date as string) || "1970-01-01",
        updated: data.updated as string | undefined,
        description: (data.description as string) || "",
        author: (data.author as string) || "Maître Haifa Guedhami Alouini",
        image: data.image as string | undefined,
        tags: (data.tags as string[]) || [],
      },
      content,
    };
  }

  return null;
}
