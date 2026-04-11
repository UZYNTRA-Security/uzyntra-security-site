import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GoogleAnalytics — loads GA4 after hydration is complete.
 *
 * strategy="afterInteractive" fires after the page hydrates, keeping GTM
 * off the render-critical path (no FCP/LCP impact) while still loading
 * early enough for accurate real-time analytics and bounce tracking.
 *
 * Skipped entirely when NEXT_PUBLIC_GA_ID is not set (dev / preview builds).
 */
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
