export const getBookingConfig = (locale = "fr") => {
  // Cal.com supports Arabic natively
  const calLink = "wajjih-alouini-eis3ub/30min";

  return {
    calLink,
    locale,
    config: {
      layout: "month_view",
      theme: "light",
    },
  };
};
