(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_6dc008._.js", {

"[project]/src/app/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convenienceData": (()=>convenienceData),
    "description": (()=>description),
    "directionData": (()=>directionData),
    "hotelsData": (()=>hotelsData),
    "inHotelsData": (()=>inHotelsData),
    "inWebsiteData": (()=>inWebsiteData),
    "reviews": (()=>reviews),
    "rulesData": (()=>rulesData),
    "serviceData": (()=>serviceData)
});
const reviews = {
    name: "Елена Шкалова",
    stars: 3,
    imgUser: "/img/Ellipse.png",
    date: new Date(),
    description: "Бываю там часто, море и закаты в этом месте восхитительны. Много людей гуляет. Можно добраться из любой точки города. Сервис на высшем уровне, еда вкуснейшая и лучшая в городе"
}; // рандомные данные для отзыва, которые в дальнейшем будут из backend
const description = "Отель «Восход» находятся в Москве. Для гостей, прибывших на личном транспорте, предоставляется частная парковка; также предусмотрен бесплатный Wi-Fi на всей территории. Разместиться предлагается в номерах разной категории, оформленных в классическом стиле. Каждый из них оснащен современной техникой и мебелью, индивидуальной ванной комнатой и кондиционером. В шаговой доступности от апартаментов работает множество кафе, ресторанов и продуктовых магазинов. До ближайшей станции метро «Владыкино» 350 метров пешком. Аэропорт «Шереметьево» в 30 минутах езды на машине."; // для переноса строк необходимо будет форматирование текста на frontend в админ панели
const serviceData = [
    {
        srcIcon: "/assets/svg/IconУскор.svg",
        description: "Ускоренная регистрация заезда и выезда"
    },
    {
        srcIcon: "/assets/svg/IconКамерахранения.svg",
        description: "Камера хранения"
    },
    {
        srcIcon: "/assets/svg/IconКарта.svg",
        description: "Принимаются банковские карты"
    },
    {
        srcIcon: "/assets/svg/IconДетская.svg",
        description: "Детская площадка"
    },
    {
        srcIcon: "/assets/svg/IconГладильн.svg",
        description: "Гладильные принадлежности"
    }
];
const convenienceData = [
    {
        srcIcon: "/assets/svg/IconБанкет.svg",
        description: "Банкетный зал"
    },
    {
        srcIcon: "/assets/svg/IconБарбекю.svg",
        description: "Место для барбекю"
    },
    {
        srcIcon: "/assets/svg/IconСтойкарегистр.svg",
        description: "Круглосуточная стойка регистрации"
    },
    {
        srcIcon: "/assets/svg/IconСменабелья.svg",
        description: "Ежедневная смена постельного белья"
    },
    {
        srcIcon: "/assets/svg/IconПереговорная.svg",
        description: "Переговорная"
    }
];
const directionData = [
    {
        title: "Москва",
        src: "/img/atelika grand1.jpg",
        description: "570 отелей и 4782 квартир"
    },
    {
        title: "Санкт-Петербург",
        src: "/img/atelika grand2.jpg",
        description: "1104 отелей и 5006 квартир"
    },
    {
        title: "Сочи",
        src: "/img/atelika meridian1.jpg",
        description: "1268 отелей и 3197 квартир"
    },
    {
        title: "Казань",
        src: "/img/atelika meridian2.jpg",
        description: "570 отелей и 4782 квартир"
    },
    {
        title: "Астрахань",
        src: "/img/bridge_resort_1.jpg",
        description: "570 отелей и 4782 квартир"
    },
    {
        title: "Ульяновск",
        src: "/img/bridge_resort_2.jpg",
        description: "570 отелей и 4782 квартир"
    },
    {
        title: "Пенза",
        src: "/img/dovil1.jpg",
        description: "570 отелей и 4782 квартир"
    },
    {
        title: "Уфа",
        src: "/img/dovil2.jpg",
        description: "570 отелей и 4782 квартир"
    },
    {
        title: "Сызрань",
        src: "/img/riviera1.jpg",
        description: "570 отелей и 4782 квартир"
    },
    {
        title: "Челябинск",
        src: "/img/riviera2.jpg",
        description: "570 отелей и 4782 квартир"
    }
];
const hotelsData = [
    {
        title: "Адлер",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hotel_Moskva_%28Belgrade%29.jpg/1200px-Hotel_Moskva_%28Belgrade%29.jpg",
        description: "Отель «Богатырь». Он считается одним из лучших из семейных и расположен в знаменитом «Сочи Парке»."
    },
    {
        title: "Калининград",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5LFfOxUzD7PiRfQlCB82-BNBxpPoWJqYFQ&s",
        description: "«Radisson Blu Hotel» находится в топе лучших отелей России и расположен в самом центре, на Площади Победы."
    },
    {
        title: "Казань",
        src: "https://www.delfin-tour.ru/system/hotels/326/photos/1020x700/17228458235096328.jpg",
        description: "В отеле «NEO Kazan Palace by Tasigo» вы будете чувствовать эко-подход создателей на всей территории отеля и в номерах."
    },
    {
        title: "Самара",
        src: "https://broni.travel/public/sites/pages/8856/471029.jpg",
        description: "Radisson Blu Hotel» находится в топе лучших отелей России и расположен в самом центре"
    }
];
const rulesData = [
    {
        srcIcon: "/assets/svg/IconЖивотное.svg",
        description: "Можно с животными"
    },
    {
        srcIcon: "/assets/svg/IconДети.svg",
        description: "Не сдаем с детьми до 3х лет"
    }
];
const inHotelsData = [
    {
        srcIcon: "/assets/svg/IconНал.svg",
        description: "Наличными"
    },
    {
        srcIcon: "/assets/svg/IconКарта.svg",
        description: "Картой"
    }
];
const inWebsiteData = [
    {
        srcIcon: "/assets/svg/IconПредоплата.svg",
        description: "Предоплата не требуется"
    },
    {
        srcIcon: "/assets/svg/IconОтменаброни.svg",
        description: "Бесплатная отмена брони до 14 дней до заезда"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/advantages/advantages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Advantages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Icon/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Typography/Typography.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/styles/theme.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/app/styles/theme.ts [app-client] (ecmascript) <locals>");
;
;
;
;
;
function Advantages() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        srcImg: "trophy.svg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        children: "Только проверенные объекты для вашего спокойствия. Сотни тысяч отзывов, фото и видео от реальных постояльцев. Безопасное бронирование и достоверная информация"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/advantages/advantages.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        srcImg: "like.svg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        children: "Ваше идеальное жильё всего в нескольких кликах. Наша передовая система поиска и настраиваемые фильтры моментально находят лучшие предложения, соответствующие вашим критериям"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/advantages/advantages.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        srcImg: "location.svg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        children: "У Arendomania более 2 000 000 вариантов размещения по всей России. Это отели, апартаменты, квартиры. В любой сезон вы найдёте то, что подходит именно вам."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/advantages/advantages.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        srcImg: "message.svg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        children: "Заботливая поддержка 24/7. Наши операторы помогут с выбором отеля и бронированием. Если вопрос возник в поездке, оператор будет на связи и найдёт решение в кротчайший срок."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/advantages/advantages.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/advantages/advantages.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/advantages/advantages.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Advantages;
const ContentWrapper = styled.div.withConfig({
    displayName: "advantages__ContentWrapper",
    componentId: "sc-cec23cb6-0"
})`
    max-width: 1240px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    @media ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["theme"].media.tablet} { 
        /**адаптивная верстка 'screen and (max-width: 992px)',*/
        align-items: center;
        flex-direction: column;
    }
        @media ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["theme"].media.mobile} {
            /**адаптивная верстка 'screen and (max-width: 576px)',*/
            flex-direction: column;
            align-items: center;
            gap: 32px;
        }
`;
_c1 = ContentWrapper;
const Content = styled.div.withConfig({
    displayName: "advantages__Content",
    componentId: "sc-cec23cb6-1"
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    text-align: center;

    @media ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["theme"].media.mobile} {
        /**адаптивная верстка 'screen and (max-width: 576px)',*/
        gap: 32px;
    }
`;
_c2 = Content;
const Text = styled(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body4_Regular"]).withConfig({
    displayName: "advantages__Text",
    componentId: "sc-cec23cb6-2"
})`
    padding: 10px;
    text-align: center;

    @media ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["theme"].media.mobile} {
        /**адаптивная верстка 'screen and (max-width: 576px)',*/
        max-width: 382px;
    }
`;
_c3 = Text;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "Advantages");
__turbopack_refresh__.register(_c1, "ContentWrapper");
__turbopack_refresh__.register(_c2, "Content");
__turbopack_refresh__.register(_c3, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/checkbox/StyledCheckbox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StyledCheckbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function StyledCheckbox({ children, isUnderlined = false, fontStyle = 'body2regular20', text, isDisabled = false, name, id, value, onChange, isChecked }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledLabel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledRadioInput, {
                type: "checkbox",
                disabled: isDisabled,
                name: name,
                id: id,
                value: value,
                onChange: onChange,
                checked: isChecked
            }, void 0, false, {
                fileName: "[project]/src/app/components/checkbox/StyledCheckbox.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledSpan, {
                fontStyle: fontStyle,
                $isUnderlined: isUnderlined,
                children: [
                    text,
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/checkbox/StyledCheckbox.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/checkbox/StyledCheckbox.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = StyledCheckbox;
const StyledLabel = styled.label.withConfig({
    displayName: "StyledCheckbox__StyledLabel",
    componentId: "sc-421d6851-0"
})`
  display: block;
  cursor: pointer;
`;
_c1 = StyledLabel;
const StyledRadioInput = styled.input.withConfig({
    displayName: "StyledCheckbox__StyledRadioInput",
    componentId: "sc-421d6851-1"
})`
  display: none;
`;
_c2 = StyledRadioInput;
const StyledSpan = styled.span.withConfig({
    displayName: "StyledCheckbox__StyledSpan",
    componentId: "sc-421d6851-2"
})`
  color: ${({ theme })=>theme.colors.font100};
  display: flex;
  align-items: center;
  text-decoration: ${({ $isUnderlined })=>$isUnderlined ? 'underline' : 'none'};
  text-decoration-thickness: ${({ $isUnderlined })=>$isUnderlined ? '1px' : 'none'};
  text-underline-offset: ${({ $isUnderlined })=>$isUnderlined ? '4px' : 'none'};
  font: ${({ theme, fontStyle })=>theme.fonts[fontStyle]};

  &::before {
    flex-shrink: 0;
    content: '';
    display: inline-block;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    margin-right: 18px;
    border-radius: 4px;
    border: 2px solid;
    border-color: ${({ theme })=>theme.colors.primary100};
  }

  ${StyledRadioInput}:checked + &::before {
    background-color: ${({ theme })=>theme.colors.primary100};
    background-image: url('/assets/svg/checkbox.svg');
    background-position: center;
    background-size: 12px;
    background-repeat: no-repeat;
  }

  ${StyledRadioInput}:disabled + &::before {
    background-color: ${({ theme })=>theme.colors.font30};
  }
`;
_c3 = StyledSpan;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "StyledCheckbox");
__turbopack_refresh__.register(_c1, "StyledLabel");
__turbopack_refresh__.register(_c2, "StyledRadioInput");
__turbopack_refresh__.register(_c3, "StyledSpan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Subscription/Subscription.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Subscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-hook-form'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$checkbox$2f$StyledCheckbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/checkbox/StyledCheckbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-redux'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
function Subscription() {
    _s();
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDesktop = useSelector({
        "Subscription.useSelector[isDesktop]": (state)=>state.adaptation.isDesktop
    }["Subscription.useSelector[isDesktop]"]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data)=>{
        // console.log(data); // гдето здесь добавить отправку на сервер или куда там
        setIsChecked(false);
        reset();
    };
    const handleCheckboxChange = (event)=>{
        setIsChecked(event.target.checked);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageBox, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: '/img/subscription.jpg',
                    alt: "subscription",
                    sizes: "363px",
                    fill: true
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainBox, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextBox, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Путешествуйте выгоднее!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Узнавайте первыми о выгодных ценах и спецпредложениях."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledForm, {
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputBox, {
                                $errorsEmail: Boolean(errors.email?.message),
                                className: "first",
                                children: [
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorSpan, {
                                        children: errors.email.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                        lineNumber: 58,
                                        columnNumber: 30
                                    }, this),
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorImageBox, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/exclamation-circle.svg",
                                            alt: "error",
                                            width: 20,
                                            height: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ...register('email', {
                                            required: 'Заполните это поле',
                                            minLength: {
                                                value: 6,
                                                message: 'Почта может содержать от 6 до 256 символов'
                                            },
                                            maxLength: {
                                                value: 256,
                                                message: 'Почта может содержать от 6 до 256 символов'
                                            },
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Адрес электронной почты должен содержать «@»'
                                            }
                                        }),
                                        placeholder: "Почта"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
                                disabled: !isChecked,
                                className: "second",
                                $disabled: !isChecked,
                                children: "Подписаться"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperCheckbox, {
                                className: "third",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$checkbox$2f$StyledCheckbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: "Я согласен получать рассылки с новостями и спецпредложениями",
                                    fontStyle: isDesktop ? 'body4regular16' : 'body6regular12',
                                    onChange: handleCheckboxChange,
                                    isChecked: isChecked
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Subscription/Subscription.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Subscription, "w8u1x7pgyAIIqJNeoo3zQ/RDEIM=", false, function() {
    return [
        useSelector,
        useForm
    ];
});
_c = Subscription;
const Wrapper = styled.div.withConfig({
    displayName: "Subscription__Wrapper",
    componentId: "sc-e0590787-0"
})`
  width: 100%;
  max-width: 1240px;
  min-height: 292px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme })=>theme.colors.font5};
  border-radius: 20px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
  }
`;
_c1 = Wrapper;
const ImageBox = styled.div.withConfig({
    displayName: "Subscription__ImageBox",
    componentId: "sc-e0590787-1"
})`
  position: relative;
  width: 100%;
  max-width: 363px;
  height: 292px;
  overflow: hidden;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 768px;
    height: 267px;
    border-radius: 12px;
  }
`;
_c2 = ImageBox;
const MainBox = styled.div.withConfig({
    displayName: "Subscription__MainBox",
    componentId: "sc-e0590787-2"
})`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 32px;
  margin: 0 88px;
  width: 700px;

  @media (max-width: 1239px) {
    margin: 0 auto;
  }
  @media (max-width: 1072px) {
    margin: 0 5px;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin: 0;
    padding: 32px 0 20px 0;
  }
`;
_c3 = MainBox;
const TextBox = styled.div.withConfig({
    displayName: "Subscription__TextBox",
    componentId: "sc-e0590787-3"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font: ${({ theme })=>theme.fonts.h2bold32};
  }

  p {
    font: ${({ theme })=>theme.fonts.body2regular20};
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 280px;

    h2 {
      font: ${({ theme })=>theme.fonts.body2bold20};
    }
    p {
      font: ${({ theme })=>theme.fonts.body4regular16};
    }
  }
`;
_c4 = TextBox;
const StyledForm = styled.form.withConfig({
    displayName: "Subscription__StyledForm",
    componentId: "sc-e0590787-4"
})`
  display: grid;
  grid-template-areas:
    'first second'
    'third third';
  grid-template-columns: 3fr 1fr;
  gap: 22px 30px;

  @media (max-width: 768px) {
    grid-template-areas:
      'first'
      'third'
      'second';
    grid-template-columns: 1fr;
    justify-items: center;

  }
`;
_c5 = StyledForm;
const InputBox = styled.div.withConfig({
    displayName: "Subscription__InputBox",
    componentId: "sc-e0590787-5"
})`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 498px;
  height: 48px;
  box-sizing: border-box;
  grid-area: first;

  input {
    max-width: 498px;
    min-width: 320px;
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-grow: 1;
    border-radius: 12px;
    border: 1px solid;
    padding: 0 48px 0 24px;
    border-color: ${({ theme, $errorsEmail })=>$errorsEmail ? theme.colors.redAlert : theme.colors.font30};
    font: ${({ theme })=>theme.fonts.body2regular20};

    &::placeholder {
      font: ${({ theme })=>theme.fonts.body2regular20};
      color: ${({ theme })=>theme.colors.font30};
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    max-width: 312px;

    input {
      font: ${({ theme })=>theme.fonts.body4regular16};
      padding: 0 48px 0 16px;
      width: 312px;
      min-width: 312px;

      &::placeholder {
        font: ${({ theme })=>theme.fonts.body4regular16};
        color: ${({ theme })=>theme.colors.font30};
      }
    }
  }
`;
_c6 = InputBox;
const ErrorSpan = styled.span.withConfig({
    displayName: "Subscription__ErrorSpan",
    componentId: "sc-e0590787-6"
})`
  position: absolute;
  top: 0;
  left: 24px;
  padding: 0 4px;
  transform: translateY(-50%);
  color: ${({ theme })=>theme.colors.redAlert};
  font: ${({ theme })=>theme.fonts.body6regular12};
  background-color: ${({ theme })=>theme.colors.backgroundWhite100};

  @media (max-width: 768px) {
    left: 16px;
  }
`;
_c7 = ErrorSpan;
const ErrorImageBox = styled.div.withConfig({
    displayName: "Subscription__ErrorImageBox",
    componentId: "sc-e0590787-7"
})`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 24px;
  top: 30%;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    right: 20px;
  }
`;
_c8 = ErrorImageBox;
const StyledButton = styled.button.withConfig({
    displayName: "Subscription__StyledButton",
    componentId: "sc-e0590787-8"
})`
  width: 172px;
  height: 48px;
  flex-shrink: 0;
  border: none;
  box-sizing: border-box;
  padding: 0;
  border-radius: 12px;
  background-color: ${({ theme })=>theme.colors.accent100};
  font: ${({ theme })=>theme.fonts.body2medium20};
  grid-area: second;

  ${({ theme, $disabled })=>!$disabled && `
      &:hover {
        cursor: pointer;
        background-color: ${theme.colors.accent70};
      }

      &:active {
        background-color: ${theme.colors.accent30};
      }


  `};

  @media (max-width: 768px) {
    width: 312px;
    font: ${({ theme })=>theme.fonts.body2regular20};
    
  }
`;
_c9 = StyledButton;
const WrapperCheckbox = styled.div.withConfig({
    displayName: "Subscription__WrapperCheckbox",
    componentId: "sc-e0590787-9"
})`
  display: grid;
  grid-area: third;
  width: fit-content;

  @media (max-width: 768px) {
    width: 254px;
  }
`;
_c10 = WrapperCheckbox;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_refresh__.register(_c, "Subscription");
__turbopack_refresh__.register(_c1, "Wrapper");
__turbopack_refresh__.register(_c2, "ImageBox");
__turbopack_refresh__.register(_c3, "MainBox");
__turbopack_refresh__.register(_c4, "TextBox");
__turbopack_refresh__.register(_c5, "StyledForm");
__turbopack_refresh__.register(_c6, "InputBox");
__turbopack_refresh__.register(_c7, "ErrorSpan");
__turbopack_refresh__.register(_c8, "ErrorImageBox");
__turbopack_refresh__.register(_c9, "StyledButton");
__turbopack_refresh__.register(_c10, "WrapperCheckbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/carousel/button-slider/ButtonSleder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ButtonSlider": (()=>ButtonSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/styles/theme.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Icon/Icon.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-redux'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/store/selectors/selectorAdaptation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/app/styles/theme.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const ButtonWraper = ({ disabled, className, location, onClick })=>{
    _s();
    const isDesctop = useSelector(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectorAdaptation"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxButton, {
        $location: location,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: disabled,
            className: className,
            onClick: onClick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    srcImg: "/Vector.svg",
                    width: isDesctop ? 21 : 14,
                    height: isDesctop ? 21 : 14
                }, void 0, false, {
                    fileName: "[project]/src/app/components/carousel/button-slider/ButtonSleder.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/carousel/button-slider/ButtonSleder.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/carousel/button-slider/ButtonSleder.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/carousel/button-slider/ButtonSleder.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_s(ButtonWraper, "PhA607cXmTM4TZkAVYBMqB/3+go=", false, function() {
    return [
        useSelector
    ];
});
_c = ButtonWraper;
const ButtonSlider = styled(ButtonWraper).withConfig({
    displayName: "ButtonSleder__ButtonSlider",
    componentId: "sc-57c99175-0"
})`
  position: relative;
  box-sizing: border-box;
  color: white;
  // background: no-repeat center url("Vector.svg") white;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  border: none;
  width: 52px;
  height: 52px;
  padding: 0;
  float: ${({ location })=>location};
  margin-right: ${({ location })=>location === "right" ? "0" : null};
  cursor: pointer;
  transform: ${({ location })=>location === "left" ? "rotate(180deg)" : null};
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  @media ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["theme"].media.mobile} {
    width: 32px;
    height: 32px;
  }
`;
const BoxButton = styled.div.withConfig({
    displayName: "ButtonSleder__BoxButton",
    componentId: "sc-57c99175-1"
})`
  position: absolute;
  top: 35.5%;
  right: ${({ $location })=>$location === "right" ? "4px" : undefined};
  left: ${({ $location })=>$location === "left" ? "4px" : undefined};
  transform: translateY(50%);
  z-index: 10;

  @media ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["theme"].media.mobile} {
    right: ${({ $location })=>$location === "right" ? "121px" : undefined};
    left: ${({ $location })=>$location === "left" ? "121px" : undefined};
    transform: translateY(50%);
    top: 139px;
  }
`;
_c1 = BoxButton;
const IconWrapper = styled.div.withConfig({
    displayName: "ButtonSleder__IconWrapper",
    componentId: "sc-57c99175-2"
})`
  img {
    pointer-events: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
_c2 = IconWrapper;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ButtonWraper");
__turbopack_refresh__.register(_c1, "BoxButton");
__turbopack_refresh__.register(_c2, "IconWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/carousel/object-card/CardObject.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CardObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/material/Card'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/material/CardContent'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/material/CardMedia'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/material/CardActionArea'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/styles/theme.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Typography/Typography.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-redux'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/store/selectors/selectorAdaptation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/app/styles/theme.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
function CardObject({ title, description, numberOfLines, img }) {
    _s();
    const isDesktop = useSelector(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectorAdaptation"]);
    const maxLength = numberOfLines === 1 ? 35 : numberOfLines === 2 ? 73 : numberOfLines === 3 ? 103 : 103;
    if (description.length > maxLength) {
        description = description.slice(0, maxLength) + " ...";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        sx: {
            height: "100%",
            borderRadius: isDesktop ? "20px" : "12px",
            color: "#FDFDFD",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardActionArea, {
            sx: {
                display: "flex",
                flexDirection: "column",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardMedia, {
                    component: "img",
                    height: isDesktop ? "257px" : "120px",
                    width: isDesktop ? "392px" : "174px",
                    image: img,
                    alt: title,
                    sx: {
                        flexShrink: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    sx: {
                        display: "flex",
                        boxSizing: "border-box",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["theme"].colors.primary80,
                        padding: isDesktop ? "20px 22px 28px 22px" : "5px 9px 13px 9px",
                        flexGrow: 1,
                        width: "100%"
                    },
                    children: [
                        isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body2_Bold"], {
                            color: "white",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body4_Bold"], {
                            color: "white",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body3_Regular"], {
                            style: {
                                textAlign: "center"
                            },
                            color: "white",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body6_Regular"], {
                            style: {
                                textAlign: "center"
                            },
                            color: "white",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/carousel/object-card/CardObject.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(CardObject, "LsqXxGBev7/pIOM69efYxoB5vwQ=", false, function() {
    return [
        useSelector
    ];
});
_c = CardObject;
var _c;
__turbopack_refresh__.register(_c, "CardObject");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/carousel/CarouselObject.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CarouselObject": (()=>CarouselObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'swiper/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/modules'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css/navigation'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Typography/Typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$button$2d$slider$2f$ButtonSleder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/carousel/button-slider/ButtonSleder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$object$2d$card$2f$CardObject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/carousel/object-card/CardObject.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-redux'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/store/selectors/selectorAdaptation.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
SwiperCore.use([
    Navigation,
    Autoplay
]);
const CarouselObject = ({ data, title, numberOfLinesСard })=>{
    _s();
    const isDesktop = useSelector(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectorAdaptation"]);
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isNextSlide, setIsNextSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Состояния слайда для неактивной кнопки
    const [isPrevSlide, setIsPrevSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let isHeightMobile = numberOfLinesСard > 1 ? 273 : 183; // логика установки высоты слайда в зависимости от переданного количества строк
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H2_Bold"], {
                style: {
                    textAlign: "center",
                    marginBottom: "40px"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body1_Bold"], {
                style: {
                    textAlign: "center",
                    marginBottom: "40px"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperSwiper, {
                $isDesktop: isDesktop,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Swiper, {
                        spaceBetween: isDesktop ? 32 : 20,
                        onSlideChange: (swiper)=>{
                            const isAtNextSlide = swiper.realIndex >= swiper.slides.length - 1; // Задаем логику на деактивацию кнопок карусели
                            const isAtPrevSlide = swiper.realIndex === 0;
                            setIsNextSlide(isAtNextSlide);
                            setIsPrevSlide(isAtPrevSlide);
                        },
                        loop: true,
                        slidesPerView: 3,
                        modules: [
                            Navigation,
                            Autoplay
                        ],
                        onSwiper: (swiper)=>{
                            swiperRef.current = swiper;
                        },
                        children: data.map(({ title, src, description }, ind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwiperSlide, {
                                style: {
                                    width: isDesktop ? "100%" : "174px",
                                    height: isDesktop ? "100%" : `${isHeightMobile}px`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$object$2d$card$2f$CardObject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: title,
                                    img: src,
                                    numberOfLines: numberOfLinesСard,
                                    description: description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, ind, false, {
                                fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$button$2d$slider$2f$ButtonSleder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonSlider"], {
                        disabled: isPrevSlide,
                        location: "left",
                        onClick: ()=>swiperRef.current?.slidePrev()
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this) : null,
                    isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$button$2d$slider$2f$ButtonSleder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonSlider"], {
                        disabled: isNextSlide,
                        location: "right",
                        onClick: ()=>swiperRef.current?.slideNext()
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/carousel/CarouselObject.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_s(CarouselObject, "WNtsOYJl7duQX1wFdPc0DHMo9E0=", false, function() {
    return [
        useSelector
    ];
});
_c = CarouselObject;
const WrapperSwiper = styled.div.withConfig({
    displayName: "CarouselObject__WrapperSwiper",
    componentId: "sc-de506970-0"
})`
  position: relative;
  min-width: ${({ $isDesktop })=>$isDesktop ? "768px" : "562px"};
`;
_c1 = WrapperSwiper;
var _c, _c1;
__turbopack_refresh__.register(_c, "CarouselObject");
__turbopack_refresh__.register(_c1, "WrapperSwiper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$advantages$2f$advantages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/advantages/advantages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Subscription$2f$Subscription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Subscription/Subscription.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$CarouselObject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/carousel/CarouselObject.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-redux'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/material'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/store/selectors/selectorAdaptation.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const isDesktopStore = useSelector(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$selectors$2f$selectorAdaptation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectorAdaptation"]);
    const { isLoading } = useSelector({
        "Home.useSelector": (state)=>state.registration
    }["Home.useSelector"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "1440px",
            width: "100%",
            display: "flex",
            gap: "100px",
            flexDirection: "column",
            alignItems: "center"
        },
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Loading, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircularProgress, {
                    size: "50px"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "498px",
                    maxWidth: "1440px",
                    width: "100%",
                    backgroundColor: "antiquewhite"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: isDesktopStore ? "1240px" : "768px",
                    width: "100%",
                    display: "flex",
                    gap: "100px",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$advantages$2f$advantages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$CarouselObject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselObject"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["directionData"],
                        title: "Популярные направления",
                        numberOfLinesСard: 1
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Subscription$2f$Subscription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$carousel$2f$CarouselObject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselObject"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hotelsData"],
                        title: "Лучшие отели",
                        numberOfLinesСard: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(Home, "WGThNKokOUb/XNBfILI4RSBg/Bw=", false, function() {
    return [
        useSelector,
        useSelector
    ];
});
_c = Home;
const Loading = styled.div.withConfig({
    displayName: "page__Loading",
    componentId: "sc-d2cb3505-0"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5); //затемнение основного экрана при открытии
`;
_c1 = Loading;
var _c, _c1;
__turbopack_refresh__.register(_c, "Home");
__turbopack_refresh__.register(_c1, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_6dc008._.js.map