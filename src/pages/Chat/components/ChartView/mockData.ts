
export const lineData = {
    "chart_id": 288, // https://dune.com/queries/83579
    "type": "chart",
    "title": "ChartCustom NFT Floor Tracker",
    "render_type": "line",
    "options": {
        "sortX": true,
        "xAxis": {
            "type": "-",
            "title": {
                "text": ""
            },
            "tickFormat": ""
        },
        "yAxis": [
            {
                "type": "-",
                "title": {
                    "text": "Price (ETH)"
                }
            }
        ],
        "legend": {
            "enabled": false
        },
        "series": {
            "percentValues": false
        },
        "reverseX": false,
        "numberFormat": "0.00",
        "columnMapping": {
            "Day": "x",
            "Time": "x",
            "Time Interval": "x",
            "Floor (Approx)": "y",
            "Floor Price Ξ": "y"
        },
        "seriesOptions": {
            "Floor (Approx)": {
                "type": "area",
                "yAxis": 0,
                "zIndex": 0
            }
        },
        "valuesOptions": {},
        "showDataLabels": false,
        "globalSeriesType": "line"
    },
    "data": [
        {
            "Time Interval": "2021-06-30T00:00:00+00:00",
            "Volume Ξ": 436.2504204183215898,
            "Floor Price Ξ": 0.07
        },
        {
            "Time Interval": "2021-07-01T00:00:00+00:00",
            "Volume Ξ": 234.4223984531985889,
            "Floor Price Ξ": 0.067
        },
        {
            "Time Interval": "2021-07-02T00:00:00+00:00",
            "Volume Ξ": 126.2050680386772336,
            "Floor Price Ξ": 0.0553
        },
        {
            "Time Interval": "2021-07-03T00:00:00+00:00",
            "Volume Ξ": 41.3146717641353939,
            "Floor Price Ξ": 0.053
        },
        {
            "Time Interval": "2021-07-04T00:00:00+00:00",
            "Volume Ξ": 40.3115495693165303,
            "Floor Price Ξ": 0.049
        },
        {
            "Time Interval": "2021-07-05T00:00:00+00:00",
            "Volume Ξ": 70.1775439060451407,
            "Floor Price Ξ": 0.04
        },
        {
            "Time Interval": "2021-07-06T00:00:00+00:00",
            "Volume Ξ": 22.0940635773107597,
            "Floor Price Ξ": 0.0488
        },
        {
            "Time Interval": "2021-07-07T00:00:00+00:00",
            "Volume Ξ": 41.6046669740563740,
            "Floor Price Ξ": 0.04991
        },
        {
            "Time Interval": "2021-07-08T00:00:00+00:00",
            "Volume Ξ": 15.4069055077018367,
            "Floor Price Ξ": 0.0605
        },
        {
            "Time Interval": "2021-07-09T00:00:00+00:00",
            "Volume Ξ": 21.0877440616146936,
            "Floor Price Ξ": 0.059
        },
        {
            "Time Interval": "2021-07-10T00:00:00+00:00",
            "Volume Ξ": 11.5725165231055101,
            "Floor Price Ξ": 0.0641
        },
        {
            "Time Interval": "2021-07-11T00:00:00+00:00",
            "Volume Ξ": 12.6712165231055101,
            "Floor Price Ξ": 0.062400000000000004
        },
        {
            "Time Interval": "2021-07-12T00:00:00+00:00",
            "Volume Ξ": 16.4999954129885269,
            "Floor Price Ξ": 0.059
        },
        {
            "Time Interval": "2021-07-13T00:00:00+00:00",
            "Volume Ξ": 31.6202752745252696,
            "Floor Price Ξ": 0.0698
        },
        {
            "Time Interval": "2021-07-14T00:00:00+00:00",
            "Volume Ξ": 18.8006165231055101,
            "Floor Price Ξ": 0.065
        },
        {
            "Time Interval": "2021-07-15T00:00:00+00:00",
            "Volume Ξ": 22.3988407595830150,
            "Floor Price Ξ": 0.06712
        },
        {
            "Time Interval": "2021-07-16T00:00:00+00:00",
            "Volume Ξ": 40.3112211694404074,
            "Floor Price Ξ": 0.069
        },
        {
            "Time Interval": "2021-07-17T00:00:00+00:00",
            "Volume Ξ": 13.2056312517608578,
            "Floor Price Ξ": 0.07289028620988725
        },
    ]
}

export const areaData = {
    "chart_id": 14378, // https://dune.com/queries/2476985/4101154
    "type": "chart",
    "title": "TREASURY vs LPELEPHANT LP Detailed DuneV2",
    "render_type": "area",
    "options": {
        "sortX": true,
        "xAxis": {
            "type": "-"
        },
        "yAxis": [
            {
                "type": "linear",
                "title": {
                    "text": "Price [$/M ELE]"
                },
                "tickFormat": "$0.00"
            },
            {
                "type": "linear",
                "title": {
                    "text": "Elephant"
                },
                "tickFormat": "0.0a"
            }
        ],
        "legend": {
            "enabled": true
        },
        "reverseX": false,
        "numberFormat": "$0.000",
        "columnMapping": {
            "day": "x",
            "tokenA": "y",
            "priceBNB_M": "y",
            "bertha_balance": "y"
        },
        "seriesOptions": {
            "tokenA": {
                "name": "LPs",
                "type": "area",
                "yAxis": 1,
                "zIndex": 0
            },
            "priceBNB_M": {
                "name": "Price",
                "type": "line",
                "color": "#000000",
                "yAxis": 0,
                "zIndex": 2
            },
            "bertha_balance": {
                "name": "Treasury",
                "type": "area",
                "color": "#d71a1a",
                "yAxis": 1,
                "zIndex": 1
            }
        },
        "valuesOptions": {},
        "globalSeriesType": "area",
        "numberFormatRightYAxisSeries": "0.0a",
    },
    "data": [
        {
            "day": "2023-06-16 00:00:00.000",
            "date": "2023-06-16",
            "tokenA": 154185483272955.06,
            "tokenA_T": 154.18548327295505,
            "delta7d_tokenA_T": 0.516392278559875,
            "TVL_USD": 51234984.54646623,
            "TVL_USD_M": 51.23498454646623,
            "tokenA_BNB": 85310089249973.19,
            "tokenA_BUSD": 68875394022981.87,
            "TVL_BNB": 28448433.86565073,
            "TVL_BUSD": 22786550.680815507,
            "buy_volume": 70109.88506706698,
            "buy_volume_k": 70.10988506706698,
            "sell_volume": 64698.765833626545,
            "sell_volume_k": 64.69876583362655,
            "total_volume": 134808.65090069352,
            "diff_volume": 5411.119233440433,
            "buys": 73,
            "sells": 22,
            "txs": 95,
            "txs_BNB": 71,
            "txs_BUSD": 24,
            "priceBNB_M": 0.16673545952045565,
            "priceBUSD_M": 0.16541865933436437,
            "price_diff": -0.0013168001860912881,
            "bertha_balance": 142314520270400.97,
            "bertha_balance_T": 142.31452027040098,
            "bertha_balance_USD": 24193468.445968162,
            "delta7d_bertha_balance_T": 1.9258335932703403
        },
        {
            "day": "2023-06-15 00:00:00.000",
            "date": "2023-06-15",
            "tokenA": 154154083037660.62,
            "tokenA_T": 154.15408303766063,
            "delta7d_tokenA_T": -1.0924590942034376,
            "TVL_USD": 50753095.74074706,
            "TVL_USD_M": 50.75309574074706,
            "tokenA_BNB": 85206448683155.31,
            "tokenA_BUSD": 68947634354505.3,
            "TVL_BNB": 28010249.466841646,
            "TVL_BUSD": 22742846.27390541,
            "buy_volume": 65122.85360960172,
            "buy_volume_k": 65.12285360960172,
            "sell_volume": 24518.78696746903,
            "sell_volume_k": 24.51878696746903,
            "total_volume": 89641.64057707074,
            "diff_volume": 40604.06664213269,
            "buys": 57,
            "sells": 37,
            "txs": 94,
            "txs_BNB": 60,
            "txs_BUSD": 34,
            "priceBNB_M": 0.16436695754683567,
            "priceBUSD_M": 0.164928401727095,
            "price_diff": 0.0005614441802593295,
            "bertha_balance": 142076168629926.6,
            "bertha_balance_T": 142.07616862992657,
            "bertha_balance_USD": 22732186.980788257,
            "delta7d_bertha_balance_T": 1.9784714610497929
        },
        {
            "day": "2023-06-14 00:00:00.000",
            "date": "2023-06-14",
            "tokenA": 154345602693484.25,
            "tokenA_T": 154.34560269348424,
            "delta7d_tokenA_T": -2.24845047739625,
            "TVL_USD": 51959094.07706787,
            "TVL_USD_M": 51.95909407706787,
            "tokenA_BNB": 85361341105355.66,
            "tokenA_BUSD": 68984261588128.586,
            "TVL_BNB": 29228828.455732234,
            "TVL_BUSD": 22730265.621335633,
            "buy_volume": 97112.72582218162,
            "buy_volume_k": 97.11272582218162,
            "sell_volume": 46757.99171352807,
            "sell_volume_k": 46.75799171352807,
            "total_volume": 143870.71753570967,
            "diff_volume": 50354.734108653545,
            "buys": 73,
            "sells": 22,
            "txs": 95,
            "txs_BNB": 27,
            "txs_BUSD": 68,
            "priceBNB_M": 0.17120647401531036,
            "priceBUSD_M": 0.16474964794902766,
            "price_diff": -0.0064568260662827,
            "bertha_balance": 141597941661635.8,
            "bertha_balance_T": 141.59794166163582,
            "bertha_balance_USD": 22655670.66586173,
            "delta7d_bertha_balance_T": 1.561814721325419
        },
        {
            "day": "2023-06-13 00:00:00.000",
            "date": "2023-06-13",
            "tokenA": 154727422480379.94,
            "tokenA_T": 154.72742248037994,
            "delta7d_tokenA_T": -3.2366802651763438,
            "TVL_USD": 49991382.31543295,
            "TVL_USD_M": 49.99138231543295,
            "tokenA_BNB": 85186376508782.39,
            "tokenA_BUSD": 69541045971597.53,
            "TVL_BNB": 27440076.89001487,
            "TVL_BUSD": 22551305.425418083,
            "buy_volume": 86688.33949407519,
            "buy_volume_k": 86.6883394940752,
            "sell_volume": 15188.654399116094,
            "sell_volume_k": 15.188654399116094,
            "total_volume": 101876.99389319128,
            "diff_volume": 71499.6850949591,
            "buys": 92,
            "sells": 25,
            "txs": 117,
            "txs_BNB": 26,
            "txs_BUSD": 91,
            "priceBNB_M": 0.16105906844849716,
            "priceBUSD_M": 0.16214384692048386,
            "price_diff": 0.0010847784719867082,
            "bertha_balance": 141486270014911.84,
            "bertha_balance_T": 141.48627001491187,
            "bertha_balance_USD": 22637803.202385895,
            "delta7d_bertha_balance_T": 1.7237083678502074
        },
        {
            "day": "2023-06-12 00:00:00.000",
            "date": "2023-06-12",
            "tokenA": 155016674791959.8,
            "tokenA_T": 155.01667479195982,
            "delta7d_tokenA_T": -3.6334898351985623,
            "TVL_USD": 49813629.31089477,
            "TVL_USD_M": 49.81362931089477,
            "tokenA_BNB": 85097958609344.42,
            "tokenA_BUSD": 69918716182615.375,
            "TVL_BNB": 27436468.372978188,
            "TVL_BUSD": 22377160.937916584,
            "buy_volume": 158228.25169169717,
            "buy_volume_k": 158.22825169169718,
            "sell_volume": 354511.6775018128,
            "sell_volume_k": 354.5116775018128,
            "total_volume": 512739.92919351,
            "diff_volume": -196283.42581011564,
            "buys": 112,
            "sells": 54,
            "txs": 166,
            "txs_BNB": 67,
            "txs_BUSD": 99,
            "priceBNB_M": 0.16120520880488812,
            "priceBUSD_M": 0.1600226817628586,
            "price_diff": -0.0011825270420295075,
            "bertha_balance": 141260521115338.8,
            "bertha_balance_T": 141.2605211153388,
            "bertha_balance_USD": 22601683.378454212,
            "delta7d_bertha_balance_T": 1.5452547162578867
        },
        {
            "day": "2023-06-11 00:00:00.000",
            "date": "2023-06-11",
            "tokenA": 153702148584805.5,
            "tokenA_T": 153.70214858480549,
            "delta7d_tokenA_T": -6.781809611690562,
            "TVL_USD": 50713826.52747296,
            "TVL_USD_M": 50.71382652747295,
            "tokenA_BNB": 85460248448165.23,
            "tokenA_BUSD": 68241900136640.27,
            "TVL_BNB": 27833710.493217323,
            "TVL_BUSD": 22880116.03425564,
            "buy_volume": 74140.72107253078,
            "buy_volume_k": 74.14072107253078,
            "sell_volume": 219805.14622458667,
            "sell_volume_k": 219.80514622458668,
            "total_volume": 293945.8672971174,
            "diff_volume": -145664.4251520559,
            "buys": 105,
            "sells": 33,
            "txs": 138,
            "txs_BNB": 115,
            "txs_BUSD": 23,
            "priceBNB_M": 0.1628459488395911,
            "priceBUSD_M": 0.16763979306293456,
            "price_diff": 0.004793844223343446,
            "bertha_balance": 141022690647841.4,
            "bertha_balance_T": 141.02269064784142,
            "bertha_balance_USD": 22563630.503654625,
            "delta7d_bertha_balance_T": 1.5704780613465914
        },
        {
            "day": "2023-06-10 00:00:00.000",
            "date": "2023-06-10",
            "tokenA": 152821135119055.12,
            "tokenA_T": 152.82113511905513,
            "delta7d_tokenA_T": -9.348540730386906,
            "TVL_USD": 51485839.73352105,
            "TVL_USD_M": 51.48583973352105,
            "tokenA_BNB": 87307692190519.08,
            "tokenA_BUSD": 65513442928536.03,
            "TVL_BNB": 28546203.021831043,
            "TVL_BUSD": 22939636.71169001,
            "buy_volume": 639015.8477880604,
            "buy_volume_k": 639.0158477880605,
            "sell_volume": 552731.104275514,
            "sell_volume_k": 552.731104275514,
            "total_volume": 1191746.9520635745,
            "diff_volume": 86284.74351254641,
            "buys": 183,
            "sells": 98,
            "txs": 281,
            "txs_BNB": 172,
            "txs_BUSD": 109,
            "priceBNB_M": 0.16348045805367728,
            "priceBUSD_M": 0.17507579884569058,
            "price_diff": 0.011595340792013298,
            "bertha_balance": 140552607455885.9,
            "bertha_balance_T": 140.5526074558859,
            "bertha_balance_USD": 23893943.2675006,
            "delta7d_bertha_balance_T": 1.3222575912154753
        },
        {
            "day": "2023-06-09 00:00:00.000",
            "date": "2023-06-09",
            "tokenA": 153669090994395.2,
            "tokenA_T": 153.6690909943952,
            "delta7d_tokenA_T": -9.831362183097719,
            "TVL_USD": 53936117.219878994,
            "TVL_USD_M": 53.936117219878994,
            "tokenA_BNB": 88119239580457.44,
            "tokenA_BUSD": 65549851413937.75,
            "TVL_BNB": 30062174.790400635,
            "TVL_BUSD": 23873942.42947836,
            "buy_volume": 311796.7291673073,
            "buy_volume_k": 311.7967291673073,
            "sell_volume": 25844.446771539722,
            "sell_volume_k": 25.844446771539722,
            "total_volume": 337641.175938847,
            "diff_volume": 285952.2823957676,
            "buys": 195,
            "sells": 37,
            "txs": 232,
            "txs_BNB": 164,
            "txs_BUSD": 68,
            "priceBNB_M": 0.17057668071994828,
            "priceBUSD_M": 0.1821052368121927,
            "price_diff": 0.01152855609224443,
            "bertha_balance": 140388686677130.64,
            "bertha_balance_T": 140.38868667713064,
            "bertha_balance_USD": 25269963.601883516,
            "delta7d_bertha_balance_T": 1.4067820182654032
        },
        {
            "day": "2023-06-08 00:00:00.000",
            "date": "2023-06-08",
            "tokenA": 155246542131864.06,
            "tokenA_T": 155.24654213186406,
            "delta7d_tokenA_T": -8.866487981887781,
            "TVL_USD": 53046893.74334438,
            "TVL_USD_M": 53.04689374334438,
            "tokenA_BNB": 89262345335037.23,
            "tokenA_BUSD": 65984196796826.81,
            "TVL_BNB": 29365063.463303965,
            "TVL_BUSD": 23681830.28004042,
            "buy_volume": 334302.73007060343,
            "buy_volume_k": 334.30273007060345,
            "sell_volume": 98869.51886254731,
            "sell_volume_k": 98.86951886254731,
            "total_volume": 433172.2489331508,
            "diff_volume": 235433.21120805613,
            "buys": 136,
            "sells": 26,
            "txs": 162,
            "txs_BNB": 118,
            "txs_BUSD": 44,
            "priceBNB_M": 0.16448740705324935,
            "priceBUSD_M": 0.17945077328863754,
            "price_diff": 0.014963366235388187,
            "bertha_balance": 140097697168876.78,
            "bertha_balance_T": 140.09769716887678,
            "bertha_balance_USD": 25217585.49039782,
            "delta7d_bertha_balance_T": 1.4373536661296669
        },
        {
            "day": "2023-06-07 00:00:00.000",
            "date": "2023-06-07",
            "tokenA": 156594053170880.5,
            "tokenA_T": 156.5940531708805,
            "delta7d_tokenA_T": -8.64801700928425,
            "TVL_USD": 52600624.88397223,
            "TVL_USD_M": 52.60062488397222,
            "tokenA_BNB": 90061625434622.78,
            "tokenA_BUSD": 66532427736257.7,
            "TVL_BNB": 29128342.4121227,
            "TVL_BUSD": 23472282.47184953,
            "buy_volume": 207250.5448369509,
            "buy_volume_k": 207.2505448369509,
            "sell_volume": 85531.88791995274,
            "sell_volume_k": 85.53188791995275,
            "total_volume": 292782.43275690364,
            "diff_volume": 121718.65691699815,
            "buys": 153,
            "sells": 45,
            "txs": 198,
            "txs_BNB": 144,
            "txs_BUSD": 54,
            "priceBNB_M": 0.16171339497568496,
            "priceBUSD_M": 0.17639730933084535,
            "price_diff": 0.014683914355160393,
            "bertha_balance": 140036126940310.39,
            "bertha_balance_T": 140.0361269403104,
            "bertha_balance_USD": 23806141.579852764,
            "delta7d_bertha_balance_T": 1.5583853386133342
        },
        {
            "day": "2023-06-06 00:00:00.000",
            "date": "2023-06-06",
            "tokenA": 157964102745556.28,
            "tokenA_T": 157.9641027455563,
            "delta7d_tokenA_T": -7.600189430975406,
            "TVL_USD": 54294793.07733553,
            "TVL_USD_M": 54.29479307733553,
            "tokenA_BNB": 91553098612321.3,
            "tokenA_BUSD": 66411004133234.98,
            "TVL_BNB": 30731911.428893555,
            "TVL_BUSD": 23562881.648441974,
            "buy_volume": 230945.02556235818,
            "buy_volume_k": 230.94502556235818,
            "sell_volume": 33843.23734078681,
            "sell_volume_k": 33.84323734078681,
            "total_volume": 264788.262903145,
            "diff_volume": 197101.78822157136,
            "buys": 224,
            "sells": 29,
            "txs": 253,
            "txs_BNB": 203,
            "txs_BUSD": 50,
            "priceBNB_M": 0.16783654455556365,
            "priceBUSD_M": 0.17740193779610444,
            "price_diff": 0.009565393240540787,
            "bertha_balance": 139762561647061.66,
            "bertha_balance_T": 139.76256164706166,
            "bertha_balance_USD": 23759635.48000048,
            "delta7d_bertha_balance_T": 1.456994818888944
        },
        {
            "day": "2023-06-05 00:00:00.000",
            "date": "2023-06-05",
            "tokenA": 158650164627158.38,
            "tokenA_T": 158.65016462715838,
            "delta7d_tokenA_T": -8.03955250203,
            "TVL_USD": 56565772.90868728,
            "TVL_USD_M": 56.56577290868728,
            "tokenA_BNB": 92167694296423.36,
            "tokenA_BUSD": 66482470330735.03,
            "TVL_BNB": 33093969.900263563,
            "TVL_BUSD": 23471803.00842372,
            "buy_volume": 374437.2798324226,
            "buy_volume_k": 374.43727983242263,
            "sell_volume": 12930.968604685597,
            "sell_volume_k": 12.930968604685598,
            "total_volume": 387368.2484371082,
            "diff_volume": 361506.311227737,
            "buys": 308,
            "sells": 31,
            "txs": 339,
            "txs_BNB": 261,
            "txs_BUSD": 78,
            "priceBNB_M": 0.17953128887996822,
            "priceBUSD_M": 0.17652625490341203,
            "price_diff": -0.0030050339765561873,
            "bertha_balance": 139715266399080.9,
            "bertha_balance_T": 139.71526639908092,
            "bertha_balance_USD": 23751595.287843753,
            "delta7d_bertha_balance_T": 1.6050156177533097
        },
        {
            "day": "2023-06-04 00:00:00.000",
            "date": "2023-06-04",
            "tokenA": 160483958196496.06,
            "tokenA_T": 160.48395819649605,
            "delta7d_tokenA_T": -6.9571344863301565,
            "TVL_USD": 56257699.418488204,
            "TVL_USD_M": 56.2576994184882,
            "tokenA_BNB": 93766954216252.45,
            "tokenA_BUSD": 66717003980243.625,
            "TVL_BNB": 32883499.181780186,
            "TVL_BUSD": 23374200.236708015,
            "buy_volume": 317535.8783492989,
            "buy_volume_k": 317.5358783492989,
            "sell_volume": 22743.421921695415,
            "sell_volume_k": 22.743421921695415,
            "total_volume": 340279.3002709943,
            "diff_volume": 294792.4564276035,
            "buys": 280,
            "sells": 31,
            "txs": 311,
            "txs_BNB": 207,
            "txs_BUSD": 104,
            "priceBNB_M": 0.17534695168802097,
            "priceBUSD_M": 0.17517423476951716,
            "price_diff": -0.00017271691850381798,
            "bertha_balance": 139452212586494.83,
            "bertha_balance_T": 139.45221258649482,
            "bertha_balance_USD": 25101398.26556907,
            "delta7d_bertha_balance_T": 1.5947418914665263
        },
        {
            "day": "2023-06-03 00:00:00.000",
            "date": "2023-06-03",
            "tokenA": 162169675849442.03,
            "tokenA_T": 162.16967584944203,
            "delta7d_tokenA_T": -5.626634633867094,
            "TVL_USD": 55771659.51842101,
            "TVL_USD_M": 55.771659518421004,
            "tokenA_BNB": 94840738575797.45,
            "tokenA_BUSD": 67328937273644.58,
            "TVL_BNB": 32612306.30901685,
            "TVL_BUSD": 23159353.209404156,
            "buy_volume": 203752.67421041476,
            "buy_volume_k": 203.75267421041477,
            "sell_volume": 8369.708081964503,
            "sell_volume_k": 8.369708081964504,
            "total_volume": 212122.38229237925,
            "diff_volume": 195382.96612845027,
            "buys": 243,
            "sells": 18,
            "txs": 261,
            "txs_BNB": 160,
            "txs_BUSD": 101,
            "priceBNB_M": 0.17193195033457506,
            "priceBUSD_M": 0.17198662378464213,
            "price_diff": 0.00005467345006707203,
            "bertha_balance": 139230349864670.42,
            "bertha_balance_T": 139.23034986467042,
            "bertha_balance_USD": 23669159.47699397,
            "delta7d_bertha_balance_T": 1.3985668308731363
        },
        {
            "day": "2023-06-02 00:00:00.000",
            "date": "2023-06-02",
            "tokenA": 163500453177492.9,
            "tokenA_T": 163.50045317749291,
            "delta7d_tokenA_T": -6.12141219257075,
            "TVL_USD": 55248819.51938109,
            "TVL_USD_M": 55.24881951938109,
            "tokenA_BNB": 95545086987971.95,
            "tokenA_BUSD": 67955366189520.95,
            "TVL_BNB": 32244430.631881,
            "TVL_BUSD": 23004388.887500096,
            "buy_volume": 172556.4976840339,
            "buy_volume_k": 172.5564976840339,
            "sell_volume": 20238.306678308378,
            "sell_volume_k": 20.23830667830838,
            "total_volume": 192794.8043623423,
            "diff_volume": 152318.19100572553,
            "buys": 212,
            "sells": 24,
            "txs": 236,
            "txs_BNB": 144,
            "txs_BUSD": 92,
            "priceBNB_M": 0.16873934415874367,
            "priceBUSD_M": 0.16926101776380012,
            "price_diff": 0.0005216736050564497,
            "bertha_balance": 138981904658865.23,
            "bertha_balance_T": 138.98190465886523,
            "bertha_balance_USD": 23626923.79200709,
            "delta7d_bertha_balance_T": 1.40226251788431
        },
        {
            "day": "2023-06-01 00:00:00.000",
            "date": "2023-06-01",
            "tokenA": 164113030113751.84,
            "tokenA_T": 164.11303011375185,
            "delta7d_tokenA_T": -6.842917875464125,
            "TVL_USD": 55134662.30873085,
            "TVL_USD_M": 55.134662308730846,
            "tokenA_BNB": 96020394199059.6,
            "tokenA_BUSD": 68092635914692.24,
            "TVL_BNB": 32272452.94592657,
            "TVL_BUSD": 22862209.36280428,
            "buy_volume": 165364.96195963823,
            "buy_volume_k": 165.36496195963824,
            "sell_volume": 36525.769712166795,
            "sell_volume_k": 36.5257697121668,
            "total_volume": 201890.73167180503,
            "diff_volume": 128839.19224747142,
            "buys": 144,
            "sells": 34,
            "txs": 178,
            "txs_BNB": 138,
            "txs_BUSD": 40,
            "priceBNB_M": 0.16804999195807635,
            "priceBUSD_M": 0.1678757846255687,
            "price_diff": -0.0001742073325076421,
            "bertha_balance": 138660343502747.11,
            "bertha_balance_T": 138.6603435027471,
            "bertha_balance_USD": 23572258.395467006,
            "delta7d_bertha_balance_T": 1.4053650611365072
        },
        {
            "day": "2023-05-31 00:00:00.000",
            "date": "2023-05-31",
            "tokenA": 165242070180164.75,
            "tokenA_T": 165.24207018016475,
            "delta7d_tokenA_T": -6.472574974857312,
            "TVL_USD": 54907024.419605255,
            "TVL_USD_M": 54.90702441960525,
            "tokenA_BNB": 96887583742604.89,
            "tokenA_BUSD": 68354486437559.875,
            "TVL_BNB": 32062511.397056147,
            "TVL_BUSD": 22844513.02254911,
            "buy_volume": 135390.67508662652,
            "buy_volume_k": 135.39067508662652,
            "sell_volume": 27323.775567539404,
            "sell_volume_k": 27.323775567539403,
            "total_volume": 162714.45065416594,
            "diff_volume": 108066.89951908712,
            "buys": 188,
            "sells": 19,
            "txs": 207,
            "txs_BNB": 184,
            "txs_BUSD": 23,
            "priceBNB_M": 0.16546243676710212,
            "priceBUSD_M": 0.16710324525235815,
            "price_diff": 0.0016408084852560234,
            "bertha_balance": 138477741601697.06,
            "bertha_balance_T": 138.47774160169706,
            "bertha_balance_USD": 23541216.0722885,
            "delta7d_bertha_balance_T": 1.3270643711454397
        },
        {
            "day": "2023-05-30 00:00:00.000",
            "date": "2023-05-30",
            "tokenA": 165564292176531.7,
            "tokenA_T": 165.5642921765317,
            "delta7d_tokenA_T": -6.3331494314831875,
            "TVL_USD": 55197017.060922176,
            "TVL_USD_M": 55.19701706092217,
            "tokenA_BNB": 97189294058368.3,
            "tokenA_BUSD": 68374998118163.41,
            "TVL_BNB": 32406819.63795467,
            "TVL_BUSD": 22790197.42296751,
            "buy_volume": 167347.84703501602,
            "buy_volume_k": 167.34784703501603,
            "sell_volume": 12142.589998183874,
            "sell_volume_k": 12.142589998183874,
            "total_volume": 179490.4370331999,
            "diff_volume": 155205.25703683216,
            "buys": 192,
            "sells": 19,
            "txs": 211,
            "txs_BNB": 152,
            "txs_BUSD": 59,
            "priceBNB_M": 0.16672011023401576,
            "priceBUSD_M": 0.16665592724099418,
            "price_diff": -0.0000641829930215776,
            "bertha_balance": 138305566828172.72,
            "bertha_balance_T": 138.30556682817272,
            "bertha_balance_USD": 23511946.36078936,
            "delta7d_bertha_balance_T": 1.3780571271890665
        },
        {
            "day": "2023-05-29 00:00:00.000",
            "date": "2023-05-29",
            "tokenA": 166689717129188.38,
            "tokenA_T": 166.68971712918838,
            "delta7d_tokenA_T": -5.706536881331969,
            "TVL_USD": 55132511.26052415,
            "TVL_USD_M": 55.132511260524154,
            "tokenA_BNB": 98082769579895.28,
            "tokenA_BUSD": 68606947549293.11,
            "TVL_BNB": 32451158.42883371,
            "TVL_BUSD": 22681352.831690446,
            "buy_volume": 181082.48022134954,
            "buy_volume_k": 181.08248022134956,
            "sell_volume": 8330.39428519423,
            "sell_volume_k": 8.330394285194231,
            "total_volume": 189412.8745065438,
            "diff_volume": 172752.08593615532,
            "buys": 217,
            "sells": 15,
            "txs": 232,
            "txs_BNB": 90,
            "txs_BUSD": 142,
            "priceBNB_M": 0.16542741690425028,
            "priceBUSD_M": 0.16529924185443623,
            "price_diff": -0.00012817504981404992,
            "bertha_balance": 138110250781327.6,
            "bertha_balance_T": 138.1102507813276,
            "bertha_balance_USD": 23478742.632825688,
            "delta7d_bertha_balance_T": 1.3447460316195077
        },
        {
            "day": "2023-05-28 00:00:00.000",
            "date": "2023-05-28",
            "tokenA": 167441092682826.22,
            "tokenA_T": 167.44109268282622,
            "delta7d_tokenA_T": -5.4849287507859685,
            "TVL_USD": 54122738.155001536,
            "TVL_USD_M": 54.122738155001535,
            "tokenA_BNB": 98115845893432.38,
            "tokenA_BUSD": 69325246789393.85,
            "TVL_BNB": 31686902.737755682,
            "TVL_BUSD": 22435835.41724585,
            "buy_volume": 137673.32798399183,
            "buy_volume_k": 137.67332798399184,
            "sell_volume": 72486.11323463327,
            "sell_volume_k": 72.48611323463328,
            "total_volume": 210159.44121862508,
            "diff_volume": 65187.21474935855,
            "buys": 197,
            "sells": 18,
            "txs": 215,
            "txs_BNB": 128,
            "txs_BUSD": 87,
            "priceBNB_M": 0.16147698900834082,
            "priceBUSD_M": 0.1618157630610724,
            "price_diff": 0.000338774052731583,
            "bertha_balance": 137857470695028.28,
            "bertha_balance_T": 137.8574706950283,
            "bertha_balance_USD": 22057195.311204527,
            "delta7d_bertha_balance_T": 1.168337077675801
        },
        {
            "day": "2023-05-27 00:00:00.000",
            "date": "2023-05-27",
            "tokenA": 167796310483309.12,
            "tokenA_T": 167.79631048330913,
            "delta7d_tokenA_T": -5.934753433098625,
            "TVL_USD": 53979458.429891795,
            "TVL_USD_M": 53.97945842989179,
            "tokenA_BNB": 98381080848706.69,
            "tokenA_BUSD": 69415229634602.43,
            "TVL_BNB": 31585750.081789114,
            "TVL_BUSD": 22393708.348102678,
            "buy_volume": 301740.97285012814,
            "buy_volume_k": 301.7409728501281,
            "sell_volume": 9231.996108009364,
            "sell_volume_k": 9.231996108009364,
            "total_volume": 310972.9689581375,
            "diff_volume": 292508.9767421188,
            "buys": 200,
            "sells": 16,
            "txs": 216,
            "txs_BNB": 198,
            "txs_BUSD": 18,
            "priceBNB_M": 0.16052756185085323,
            "priceBUSD_M": 0.1613025590060121,
            "price_diff": 0.0007749971551588575,
            "bertha_balance": 137831783033797.28,
            "bertha_balance_T": 137.83178303379728,
            "bertha_balance_USD": 22053085.285407566,
            "delta7d_bertha_balance_T": 1.6031335645559466
        },
        {
            "day": "2023-05-26 00:00:00.000",
            "date": "2023-05-26",
            "tokenA": 169621865370063.66,
            "tokenA_T": 169.62186537006366,
            "delta7d_tokenA_T": -4.379708614666281,
            "TVL_USD": 53344228.17971648,
            "TVL_USD_M": 53.34422817971648,
            "tokenA_BNB": 100046037235245.16,
            "tokenA_BUSD": 69575828134818.5,
            "TVL_BNB": 31003237.967545245,
            "TVL_BUSD": 22340990.21217124,
            "buy_volume": 172456.04371780882,
            "buy_volume_k": 172.45604371780883,
            "sell_volume": 5281.416254429791,
            "sell_volume_k": 5.28141625442979,
            "total_volume": 177737.4599722386,
            "diff_volume": 167174.62746337903,
            "buys": 115,
            "sells": 13,
            "txs": 128,
            "txs_BNB": 106,
            "txs_BUSD": 22,
            "priceBNB_M": 0.15494485750917447,
            "priceBUSD_M": 0.16055137833847016,
            "price_diff": 0.005606520829295691,
            "bertha_balance": 137579642140980.94,
            "bertha_balance_T": 137.57964214098092,
            "bertha_balance_USD": 22012742.742556952,
            "delta7d_bertha_balance_T": 1.389037212995845
        },
    ]
}

export const columnData = {
    "chart_id": 14359, // https://dune.com/queries/1968745/3252672
    "type": "chart",
    "title": "ChartEM Futures - Wallets",
    "render_type": "column",
    "options": {
        "sortX": true,
        "xAxis": {
            "type": "-"
        },
        "yAxis": [
            {
                "type": "linear",
                "title": {
                    "text": "# New Wallets"
                },
                "tickFormat": "0.0a"
            },
            {
                "type": "linear",
                "title": {
                    "text": "# Wallets"
                },
                "tickFormat": "0.0a"
            }
        ],
        "legend": {
            "enabled": true
        },
        "reverseX": false,
        "numberFormat": "0.0a",
        "columnMapping": {
            "day": "x",
            "cumwallet": "y",
            "new_wallet": "y"
        },
        "seriesOptions": {
            "cumwallet": {
                "name": "Total Wallets",
                "type": "line",
                "color": "#21bf73",
                "yAxis": 1,
                "zIndex": 1
            },
            "new_wallet": {
                "name": "Daily New Wallets",
                "type": "column",
                "color": "#015387",
                "yAxis": 0,
                "zIndex": 0
            }
        },
        "valuesOptions": {},
        "showDataLabels": false,
        "globalSeriesType": "column",
        "numberFormatRightYAxisSeries": "0.0a"
    },
    "data": [
        {
            "day": "2023-06-17 00:00:00.000",
            "Date": "2023-06-17",
            "new_wallet": 0,
            "cumwallet": 1431,
            "delta7d_cumwallet": 42
        },
        {
            "day": "2023-06-16 00:00:00.000",
            "Date": "2023-06-16",
            "new_wallet": 11,
            "cumwallet": 1431,
            "delta7d_cumwallet": 47
        },
        {
            "day": "2023-06-15 00:00:00.000",
            "Date": "2023-06-15",
            "new_wallet": 2,
            "cumwallet": 1420,
            "delta7d_cumwallet": 39
        },
        {
            "day": "2023-06-14 00:00:00.000",
            "Date": "2023-06-14",
            "new_wallet": 9,
            "cumwallet": 1418,
            "delta7d_cumwallet": 42
        },
        {
            "day": "2023-06-13 00:00:00.000",
            "Date": "2023-06-13",
            "new_wallet": 3,
            "cumwallet": 1409,
            "delta7d_cumwallet": 40
        },
        {
            "day": "2023-06-12 00:00:00.000",
            "Date": "2023-06-12",
            "new_wallet": 6,
            "cumwallet": 1406,
            "delta7d_cumwallet": 45
        },
        {
            "day": "2023-06-11 00:00:00.000",
            "Date": "2023-06-11",
            "new_wallet": 11,
            "cumwallet": 1400,
            "delta7d_cumwallet": 48
        },
        {
            "day": "2023-06-10 00:00:00.000",
            "Date": "2023-06-10",
            "new_wallet": 5,
            "cumwallet": 1389,
            "delta7d_cumwallet": 44
        },
        {
            "day": "2023-06-09 00:00:00.000",
            "Date": "2023-06-09",
            "new_wallet": 3,
            "cumwallet": 1384,
            "delta7d_cumwallet": 46
        },
        {
            "day": "2023-06-08 00:00:00.000",
            "Date": "2023-06-08",
            "new_wallet": 5,
            "cumwallet": 1381,
            "delta7d_cumwallet": 53
        },
        {
            "day": "2023-06-07 00:00:00.000",
            "Date": "2023-06-07",
            "new_wallet": 7,
            "cumwallet": 1376,
            "delta7d_cumwallet": 51
        },
        {
            "day": "2023-06-06 00:00:00.000",
            "Date": "2023-06-06",
            "new_wallet": 8,
            "cumwallet": 1369,
            "delta7d_cumwallet": 53
        },
        {
            "day": "2023-06-05 00:00:00.000",
            "Date": "2023-06-05",
            "new_wallet": 9,
            "cumwallet": 1361,
            "delta7d_cumwallet": 55
        },
        {
            "day": "2023-06-04 00:00:00.000",
            "Date": "2023-06-04",
            "new_wallet": 7,
            "cumwallet": 1352,
            "delta7d_cumwallet": 54
        },
        {
            "day": "2023-06-03 00:00:00.000",
            "Date": "2023-06-03",
            "new_wallet": 7,
            "cumwallet": 1345,
            "delta7d_cumwallet": 53
        },
        {
            "day": "2023-06-02 00:00:00.000",
            "Date": "2023-06-02",
            "new_wallet": 10,
            "cumwallet": 1338,
            "delta7d_cumwallet": 54
        },
        {
            "day": "2023-06-01 00:00:00.000",
            "Date": "2023-06-01",
            "new_wallet": 3,
            "cumwallet": 1328,
            "delta7d_cumwallet": 49
        },
        {
            "day": "2023-05-31 00:00:00.000",
            "Date": "2023-05-31",
            "new_wallet": 9,
            "cumwallet": 1325,
            "delta7d_cumwallet": 53
        },
        {
            "day": "2023-05-30 00:00:00.000",
            "Date": "2023-05-30",
            "new_wallet": 10,
            "cumwallet": 1316,
            "delta7d_cumwallet": 51
        },
        {
            "day": "2023-05-29 00:00:00.000",
            "Date": "2023-05-29",
            "new_wallet": 8,
            "cumwallet": 1306,
            "delta7d_cumwallet": 49
        },
        {
            "day": "2023-05-28 00:00:00.000",
            "Date": "2023-05-28",
            "new_wallet": 6,
            "cumwallet": 1298,
            "delta7d_cumwallet": 47
        },
        {
            "day": "2023-05-27 00:00:00.000",
            "Date": "2023-05-27",
            "new_wallet": 8,
            "cumwallet": 1292,
            "delta7d_cumwallet": 49
        },
        {
            "day": "2023-05-26 00:00:00.000",
            "Date": "2023-05-26",
            "new_wallet": 5,
            "cumwallet": 1284,
            "delta7d_cumwallet": 51
        },
        {
            "day": "2023-05-25 00:00:00.000",
            "Date": "2023-05-25",
            "new_wallet": 7,
            "cumwallet": 1279,
            "delta7d_cumwallet": 54
        },
        {
            "day": "2023-05-24 00:00:00.000",
            "Date": "2023-05-24",
            "new_wallet": 7,
            "cumwallet": 1272,
            "delta7d_cumwallet": 53
        },
        {
            "day": "2023-05-23 00:00:00.000",
            "Date": "2023-05-23",
            "new_wallet": 8,
            "cumwallet": 1265,
            "delta7d_cumwallet": 59
        },
        {
            "day": "2023-05-22 00:00:00.000",
            "Date": "2023-05-22",
            "new_wallet": 6,
            "cumwallet": 1257,
            "delta7d_cumwallet": 59
        },
        {
            "day": "2023-05-21 00:00:00.000",
            "Date": "2023-05-21",
            "new_wallet": 8,
            "cumwallet": 1251,
            "delta7d_cumwallet": 67
        },
        {
            "day": "2023-05-20 00:00:00.000",
            "Date": "2023-05-20",
            "new_wallet": 10,
            "cumwallet": 1243,
            "delta7d_cumwallet": 75
        },
        {
            "day": "2023-05-19 00:00:00.000",
            "Date": "2023-05-19",
            "new_wallet": 8,
            "cumwallet": 1233,
            "delta7d_cumwallet": 76
        },
        {
            "day": "2023-05-18 00:00:00.000",
            "Date": "2023-05-18",
            "new_wallet": 6,
            "cumwallet": 1225,
            "delta7d_cumwallet": 76
        },
        {
            "day": "2023-05-17 00:00:00.000",
            "Date": "2023-05-17",
            "new_wallet": 13,
            "cumwallet": 1219,
            "delta7d_cumwallet": 76
        },
        {
            "day": "2023-05-16 00:00:00.000",
            "Date": "2023-05-16",
            "new_wallet": 8,
            "cumwallet": 1206,
            "delta7d_cumwallet": 65
        },
        {
            "day": "2023-05-15 00:00:00.000",
            "Date": "2023-05-15",
            "new_wallet": 14,
            "cumwallet": 1198,
            "delta7d_cumwallet": 69
        },
        {
            "day": "2023-05-14 00:00:00.000",
            "Date": "2023-05-14",
            "new_wallet": 16,
            "cumwallet": 1184,
            "delta7d_cumwallet": 59
        },
        {
            "day": "2023-05-13 00:00:00.000",
            "Date": "2023-05-13",
            "new_wallet": 11,
            "cumwallet": 1168,
            "delta7d_cumwallet": 56
        },
        {
            "day": "2023-05-12 00:00:00.000",
            "Date": "2023-05-12",
            "new_wallet": 8,
            "cumwallet": 1157,
            "delta7d_cumwallet": 56
        },
        {
            "day": "2023-05-11 00:00:00.000",
            "Date": "2023-05-11",
            "new_wallet": 6,
            "cumwallet": 1149,
            "delta7d_cumwallet": 53
        },
        {
            "day": "2023-05-10 00:00:00.000",
            "Date": "2023-05-10",
            "new_wallet": 2,
            "cumwallet": 1143,
            "delta7d_cumwallet": 56
        },
        {
            "day": "2023-05-09 00:00:00.000",
            "Date": "2023-05-09",
            "new_wallet": 12,
            "cumwallet": 1141,
            "delta7d_cumwallet": 58
        },
        {
            "day": "2023-05-08 00:00:00.000",
            "Date": "2023-05-08",
            "new_wallet": 4,
            "cumwallet": 1129,
            "delta7d_cumwallet": 51
        },
        {
            "day": "2023-05-07 00:00:00.000",
            "Date": "2023-05-07",
            "new_wallet": 13,
            "cumwallet": 1125,
            "delta7d_cumwallet": 57
        },
        {
            "day": "2023-05-06 00:00:00.000",
            "Date": "2023-05-06",
            "new_wallet": 11,
            "cumwallet": 1112,
            "delta7d_cumwallet": 47
        },
        {
            "day": "2023-05-05 00:00:00.000",
            "Date": "2023-05-05",
            "new_wallet": 5,
            "cumwallet": 1101,
            "delta7d_cumwallet": 38
        },
        {
            "day": "2023-05-04 00:00:00.000",
            "Date": "2023-05-04",
            "new_wallet": 9,
            "cumwallet": 1096,
            "delta7d_cumwallet": 43
        },
        {
            "day": "2023-05-03 00:00:00.000",
            "Date": "2023-05-03",
            "new_wallet": 4,
            "cumwallet": 1087,
            "delta7d_cumwallet": 38
        },
        {
            "day": "2023-05-02 00:00:00.000",
            "Date": "2023-05-02",
            "new_wallet": 5,
            "cumwallet": 1083,
            "delta7d_cumwallet": 43
        },
        {
            "day": "2023-05-01 00:00:00.000",
            "Date": "2023-05-01",
            "new_wallet": 10,
            "cumwallet": 1078,
            "delta7d_cumwallet": 42
        },
        {
            "day": "2023-04-30 00:00:00.000",
            "Date": "2023-04-30",
            "new_wallet": 3,
            "cumwallet": 1068,
            "delta7d_cumwallet": 36
        },
        {
            "day": "2023-04-29 00:00:00.000",
            "Date": "2023-04-29",
            "new_wallet": 2,
            "cumwallet": 1065,
            "delta7d_cumwallet": 37
        },
        {
            "day": "2023-04-28 00:00:00.000",
            "Date": "2023-04-28",
            "new_wallet": 10,
            "cumwallet": 1063,
            "delta7d_cumwallet": 43
        },
        {
            "day": "2023-04-27 00:00:00.000",
            "Date": "2023-04-27",
            "new_wallet": 4,
            "cumwallet": 1053,
            "delta7d_cumwallet": 38
        },
        {
            "day": "2023-04-26 00:00:00.000",
            "Date": "2023-04-26",
            "new_wallet": 9,
            "cumwallet": 1049,
            "delta7d_cumwallet": 36
        },
        {
            "day": "2023-04-25 00:00:00.000",
            "Date": "2023-04-25",
            "new_wallet": 4,
            "cumwallet": 1040,
            "delta7d_cumwallet": 33
        },
        {
            "day": "2023-04-24 00:00:00.000",
            "Date": "2023-04-24",
            "new_wallet": 4,
            "cumwallet": 1036,
            "delta7d_cumwallet": 35
        },
        {
            "day": "2023-04-23 00:00:00.000",
            "Date": "2023-04-23",
            "new_wallet": 4,
            "cumwallet": 1032,
            "delta7d_cumwallet": 38
        },
        {
            "day": "2023-04-22 00:00:00.000",
            "Date": "2023-04-22",
            "new_wallet": 8,
            "cumwallet": 1028,
            "delta7d_cumwallet": 44
        },
        {
            "day": "2023-04-21 00:00:00.000",
            "Date": "2023-04-21",
            "new_wallet": 5,
            "cumwallet": 1020,
            "delta7d_cumwallet": 39
        },
        {
            "day": "2023-04-20 00:00:00.000",
            "Date": "2023-04-20",
            "new_wallet": 2,
            "cumwallet": 1015,
            "delta7d_cumwallet": 40
        },
        {
            "day": "2023-04-19 00:00:00.000",
            "Date": "2023-04-19",
            "new_wallet": 6,
            "cumwallet": 1013,
            "delta7d_cumwallet": 41
        },
        {
            "day": "2023-04-18 00:00:00.000",
            "Date": "2023-04-18",
            "new_wallet": 6,
            "cumwallet": 1007,
            "delta7d_cumwallet": 40
        },
        {
            "day": "2023-04-17 00:00:00.000",
            "Date": "2023-04-17",
            "new_wallet": 7,
            "cumwallet": 1001,
            "delta7d_cumwallet": 41
        },
        {
            "day": "2023-04-16 00:00:00.000",
            "Date": "2023-04-16",
            "new_wallet": 10,
            "cumwallet": 994,
            "delta7d_cumwallet": 40
        },
        {
            "day": "2023-04-15 00:00:00.000",
            "Date": "2023-04-15",
            "new_wallet": 3,
            "cumwallet": 984,
            "delta7d_cumwallet": 33
        },
        {
            "day": "2023-04-14 00:00:00.000",
            "Date": "2023-04-14",
            "new_wallet": 6,
            "cumwallet": 981,
            "delta7d_cumwallet": 36
        },
        {
            "day": "2023-04-13 00:00:00.000",
            "Date": "2023-04-13",
            "new_wallet": 3,
            "cumwallet": 975,
            "delta7d_cumwallet": 43
        },
        {
            "day": "2023-04-12 00:00:00.000",
            "Date": "2023-04-12",
            "new_wallet": 5,
            "cumwallet": 972,
            "delta7d_cumwallet": 46
        },
        {
            "day": "2023-04-11 00:00:00.000",
            "Date": "2023-04-11",
            "new_wallet": 7,
            "cumwallet": 967,
            "delta7d_cumwallet": 45
        },
        {
            "day": "2023-04-10 00:00:00.000",
            "Date": "2023-04-10",
            "new_wallet": 6,
            "cumwallet": 960,
            "delta7d_cumwallet": 45
        },
        {
            "day": "2023-04-09 00:00:00.000",
            "Date": "2023-04-09",
            "new_wallet": 3,
            "cumwallet": 954,
            "delta7d_cumwallet": 41
        },
        {
            "day": "2023-04-08 00:00:00.000",
            "Date": "2023-04-08",
            "new_wallet": 6,
            "cumwallet": 951,
            "delta7d_cumwallet": 43
        },
    ]
}

export const pieData = {
    "chart_id": 14400, // https://dune.com/queries/913216/1596868
    "type": "chart",
    "title": "Allocation ChartJump's Portfolio Allocation Pie",
    "render_type": "pie",
    "options": {
        "sortX": true,
        "xAxis": {
            "type": "-"
        },
        "yAxis": [
            {
                "type": "linear"
            }
        ],
        "legend": {
            "enabled": true
        },
        "reverseX": false,
        "numberFormat": "$0[,.].0",
        "columnMapping": {
            "": "y",
            "time": "x",
            "token": "x",
            "amount_value": "y",
            "cumulative_cel_balance": "y",
            "cumulative_usdt_balance": "y"
        },
        "seriesOptions": {},
        "valuesOptions": {},
        "showDataLabels": false,
        "globalSeriesType": "pie"
    },
    "data": [
        {
            "token": "BIT",
            "amount_value": 58242094.03557129
        },
        {
            "token": "BNB",
            "amount_value": 0.000000014901161193847656
        },
        {
            "token": "BUSD",
            "amount_value": 6123050.497056849
        },
        {
            "token": "ETH",
            "amount_value": -3964456466.233745
        },
        {
            "token": "FTT",
            "amount_value": -0.00000000045440629037329927
        },
        {
            "token": "Other",
            "amount_value": 22242246.757078785
        },
        {
            "token": "SHIB",
            "amount_value": 498548.3804819405
        },
        {
            "token": "SRM",
            "amount_value": 0.03092246241067187
        },
        {
            "token": "USDC",
            "amount_value": 28814131.645110566
        },
        {
            "token": "USDT",
            "amount_value": 45879812.18968103
        },
        {
            "token": "WBTC",
            "amount_value": 5805744.819417287
        },
        {
            "token": "WETH",
            "amount_value": 1356783717.395102
        }
    ]
}

export const scatterData = {
    "chart_id": 10401, // https://dune.com/queries/2195649/3602099
    "type": "chart",
    "title": "Allocation ChartJump's Portfolio Allocation Pie",
    "render_type": "scatter",
    "options": {
        "sortX": true,
        "xAxis": {
            "type": "-",
            "title": {
                "text": "Date"
            }
        },
        "yAxis": [
            {
                "type": "-",
                "title": {
                    "text": "Price (ETH)"
                }
            }
        ],
        "legend": {
            "enabled": true
        },
        "reverseX": false,
        "columnMapping": {
            "sale_type": "series",
            "trade_day": "x",
            "amount_original": "y"
        },
        "seriesOptions": {
            "metric": {
                "name": "Average",
                "type": "line",
                "yAxis": 0,
                "zIndex": 1
            },
            "individual": {
                "name": "Individual",
                "type": "scatter",
                "color": "#141da3",
                "yAxis": 0,
                "zIndex": 0
            }
        },
        "valuesOptions": {},
        "showDataLabels": false,
        "globalSeriesType": "scatter"
    },
    "data": [
        {
            "trade_day": "2022-05-29 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.077475,
            "sale_type": "metric"
        },
        {
            "trade_day": "2022-09-19 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.0740308989569067,
            "sale_type": "metric"
        },
        {
            "trade_day": "2021-08-08 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.31,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-05-12 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.15,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-09-06 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.24,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-05-20 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.16,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-21 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.6,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-08 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.475,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-03-27 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.98,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-08 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.34,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-08 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.71,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-21 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.79,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-12-11 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.379,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-05-20 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 8,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-03-10 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.28,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-04-28 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.45,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-11-18 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.9821657688134215,
            "sale_type": "metric"
        },
        {
            "trade_day": "2022-08-18 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.983891198432484,
            "sale_type": "metric"
        },
        {
            "trade_day": "2021-10-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.2,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.15,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-10-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.25,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.99,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.739,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.474,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-18 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.8,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-23 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.75,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.22,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-05-28 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.2,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-03-26 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.15,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-18 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.9,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-04-16 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.89,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-11-05 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.2069,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-03-20 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 7.049511826086957,
            "sale_type": "metric"
        },
        {
            "trade_day": "2023-02-03 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 6.6027471857148,
            "sale_type": "metric"
        },
        {
            "trade_day": "2022-05-13 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.3,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-12-01 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.4999,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-02-02 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.59,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-07 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.388,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-20 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-07 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.48,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-10-13 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.11,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-10-21 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.75,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-12-10 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 7,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-07 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.46,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-06-07 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.4987,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-12-02 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.3498565217391305,
            "sale_type": "metric"
        },
        {
            "trade_day": "2023-02-23 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.424265555555555,
            "sale_type": "metric"
        },
        {
            "trade_day": "2022-04-05 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.7849259717314485,
            "sale_type": "metric"
        },
        {
            "trade_day": "2022-11-07 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.1295497639483,
            "sale_type": "metric"
        },
        {
            "trade_day": "2022-09-15 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.05,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-02-28 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.45,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-24 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.254271875,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-04-22 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.488,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-20 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-10-13 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.15,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-10-30 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.09,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-05-04 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.74,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-10-17 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.8,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-20 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.44,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-11-15 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.429,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-06-10 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.9373,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-10-13 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.489,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-04-05 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.65,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-11-07 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.19,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-01-08 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.1,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-10-29 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.5,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-12-26 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.74,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-12-26 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.645,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-12-26 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.96,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-03-28 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.26,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-11-16 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.6748129032258061,
            "sale_type": "metric"
        },
        {
            "trade_day": "2023-03-19 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.99,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.8,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-18 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.4,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.8,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.25,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.79,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-11-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.47,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-04-11 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.38,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-04-16 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.07,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-04-17 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.899,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-01-19 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 6,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-02-08 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.75,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.47,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-02-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.574744634414564,
            "sale_type": "metric"
        },
        {
            "trade_day": "2021-11-04 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.4137692307692307,
            "sale_type": "metric"
        },
        {
            "trade_day": "2021-08-01 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.009,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.1212,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-01 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.0147,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-23 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.99,
            "sale_type": "individual"
        },
        {
            "trade_day": "2023-02-01 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 5.29,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-14 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 3.85,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-11-16 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.5,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-11-17 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.75,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-12-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.19,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-05-28 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 15,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.498,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-08-05 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 1.78,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-02-25 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.8897,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-03-13 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 0.85,
            "sale_type": "individual"
        },
        {
            "trade_day": "2021-08-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 2.22,
            "sale_type": "individual"
        },
        {
            "trade_day": "2022-12-09 00:00:00.000 UTC",
            "currency": "ETH",
            "amount_original": 4.32,
            "sale_type": "individual"
        },
    ]
}