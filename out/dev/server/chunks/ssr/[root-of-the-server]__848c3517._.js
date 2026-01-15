module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/fetch/getColumns.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getColumns
]);
async function getColumns() {
    const url = new URL(`${("TURBOPACK compile-time value", "https://tourism.g.kuroco.app")}/rcms-api/7/insights/list`);
    const response = await fetch(url, {
        headers: {
            'X-RCMS-API-ACCESS-TOKEN': process.env.INSIGHTS_ACCESS_TOKEN
        }
    });
    url.searchParams.append('pageID', String(1));
    return await response.json();
}
}),
"[project]/src/app/insights/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$getColumns$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/getColumns.ts [app-rsc] (ecmascript)");
;
;
const breadcrumb = [
    {
        title: 'コラム'
    }
];
async function generateMetadata() {
    const title = 'コラム';
    const description = 'コラムページ。';
    return {
        title,
        description
    };
}
async function Page() {
    const columnsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$getColumns$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const { list, pageInfo } = columnsData;
    // const jsonLdBreadcrumb = {
    //   '@context': 'https://schema.org',
    //   '@type': 'BreadcrumbList',
    //   itemListElement: [
    //     {
    //       '@type': 'ListItem',
    //       position: 1,
    //       name: 'ホーム',
    //       item: 'https://www.tourism.jp/'
    //     },
    //     {
    //       '@type': 'ListItem',
    //       position: 2,
    //       name: 'コラム',
    //       item: 'https://www.tourism.jp/insights/'
    //     }
    //   ]
    // }
    // const pageList = list.map((item: CardType, index: number) => {
    //   return (
    //     {
    //       "@type": "ListItem",
    //       position: index + 1,
    //       item: {
    //         "@type": "BlogPosting",
    //         headline: item.subject,
    //         url: `https://www.tourism.jp/insights/${item.topics_id}/`,
    //         datePublished: item.ymd,
    //         author: { "@type": "Person", "name": `${item.author}` },
    //         image: item.thumb.url
    //       }
    //     }
    //   )
    // })
    // const jsonLdCards = {
    //   "@context": "https://schema.org",
    //   "@type": "CollectionPage",
    //   name: "コラム",
    //   description: "最新の記事",
    //   url: "https://www.tourism.jp/insights/series/",
    //   mainEntity: {
    //     "@type": "ItemList",
    //     itemListOrder: "https://schema.org/ItemListOrderDescending",
    //     numberOfItems: pageInfo.totalCnt,
    //     itemListElement: pageList
    //   }
    // }
    // return (
    //   <>
    //     <Breadcrumb data={breadcrumb} />
    //     <section>
    //       <RegionTop en='COLUMNS' jp='コラム' page="columns">
    //         {'旬な話題をコラムとしてお届けします'}
    //       </RegionTop>
    //       <SideNav>
    //         <ColumnsList data={columnsData} />
    //         <Series />
    //       </SideNav>
    //     </section>
    //     <Breadcrumb data={breadcrumb} footer />
    //     <Script
    //         id="jsonld-breadcrumbList"
    //         type="application/ld+json"
    //         dangerouslySetInnerHTML={{
    //           __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, '\\u003c'),
    //         }}
    //       />
    //     <Script
    //       id="jsonld-collectionPage"
    //       type="application/ld+json"
    //       dangerouslySetInnerHTML={{
    //         __html: JSON.stringify(jsonLdCards).replace(/</g, '\\u003c'),
    //       }}
    //     />
    //   </>
    // )
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/src/app/insights/page.tsx",
        lineNumber: 108,
        columnNumber: 12
    }, this);
}
}),
"[project]/src/app/insights/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/insights/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__848c3517._.js.map