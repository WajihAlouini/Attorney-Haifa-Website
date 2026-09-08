import { afterEach, describe, expect, it, vi } from "vitest";
import * as markdown from "@/utils/markdown";
import { getStructuredData } from "./seoStructuredData";

describe("article freshness and service identity", () => {
  afterEach(() => vi.restoreAllMocks());

  it.each([undefined, "2026-09-01"])(
    "preserves publication date and uses actual update date %s",
    (updated) => {
      vi.spyOn(markdown, "getPostBySlug").mockReturnValue({
        meta: {
          slug: "test-article",
          title: "Test article",
          description: "Test description",
          author: "Maître Haifa Guedhami Alouini",
          date: "2026-02-21",
          lang: "en",
          updated,
        },
        content: "Test content",
      });
      expect(getStructuredData("/actualites/test-article", "en")).toMatchObject(
        {
          "@graph": expect.arrayContaining([
            expect.objectContaining({
              "@type": "BlogPosting",
              datePublished: "2026-02-21",
              dateModified: updated || "2026-02-21",
              author: expect.objectContaining({
                url: "https://maitre-haifaguedhami.me/en/about",
              }),
            }),
          ]),
        }
      );
    }
  );

  it("describes a local practice as a service provided by the firm", () => {
    expect(getStructuredData("/avocat-divorce-kairouan", "fr")).toMatchObject({
      "@graph": expect.arrayContaining([
        expect.objectContaining({
          "@type": "Service",
          provider: { "@id": expect.any(String) },
          availableChannel: expect.objectContaining({
            "@type": "ServiceChannel",
            serviceUrl: "https://maitre-haifaguedhami.me/contact",
          }),
        }),
      ]),
    });
  });
});
