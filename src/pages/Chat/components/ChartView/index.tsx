import React from "react";
import styled from '@emotion/styled';
import Table from '@mui/material/Table';

const ChartViewContainer = styled.div`
    margin-top: 10px;
    background: rgba(55, 101, 239, 0.05);
`


const chartLineData = {
    "type": "chart",
    "title": "The price and market cap of PEPE coin",
    "render_type": "line",
    "data": [
        {
            "ts": "2023-05-11T09:56:00.000Z",
            "quote_USD_price": 0.00000164304,
            "quote_USD_market_cap": 643725000
        },
        {
            "ts": "2023-05-12T00:42:00.000Z",
            "quote_USD_price": 0.00000137997,
            "quote_USD_market_cap": 540658000
        },
        {
            "ts": "2023-05-12T00:47:00.000Z",
            "quote_USD_price": 0.00000138394,
            "quote_USD_market_cap": 542216000
        },
        {
            "ts": "2023-05-12T00:57:00.000Z",
            "quote_USD_price": 0.00000138631,
            "quote_USD_market_cap": 543142000
        },
        {
            "ts": "2023-05-12T01:08:00.000Z",
            "quote_USD_price": 0.00000137339,
            "quote_USD_market_cap": 538080000
        },
        {
            "ts": "2023-05-12T01:17:00.000Z",
            "quote_USD_price": 0.00000136898,
            "quote_USD_market_cap": 536351000
        },
        {
            "ts": "2023-05-12T01:27:00.000Z",
            "quote_USD_price": 0.00000136264,
            "quote_USD_market_cap": 533869000
        },
        {
            "ts": "2023-05-12T01:38:00.000Z",
            "quote_USD_price": 0.00000135109,
            "quote_USD_market_cap": 529343000
        },
        {
            "ts": "2023-05-12T01:48:00.000Z",
            "quote_USD_price": 0.0000013441,
            "quote_USD_market_cap": 526606000
        },
        {
            "ts": "2023-05-12T01:58:00.000Z",
            "quote_USD_price": 0.00000133271,
            "quote_USD_market_cap": 522141000
        },
        {
            "ts": "2023-05-12T02:08:00.000Z",
            "quote_USD_price": 0.00000133767,
            "quote_USD_market_cap": 524087000
        },
        {
            "ts": "2023-05-12T02:17:00.000Z",
            "quote_USD_price": 0.00000133427,
            "quote_USD_market_cap": 522752000
        },
        {
            "ts": "2023-05-12T02:27:00.000Z",
            "quote_USD_price": 0.00000131183,
            "quote_USD_market_cap": 513962000
        },
        {
            "ts": "2023-05-12T02:38:00.000Z",
            "quote_USD_price": 0.00000121236,
            "quote_USD_market_cap": 474989000
        },
        {
            "ts": "2023-05-12T02:48:00.000Z",
            "quote_USD_price": 0.00000121384,
            "quote_USD_market_cap": 475569000
        },
        {
            "ts": "2023-05-12T02:58:00.000Z",
            "quote_USD_price": 0.0000011175,
            "quote_USD_market_cap": 437824000
        },
        {
            "ts": "2023-05-12T03:07:00.000Z",
            "quote_USD_price": 0.00000114836,
            "quote_USD_market_cap": 449917000
        },
        {
            "ts": "2023-05-12T03:18:00.000Z",
            "quote_USD_price": 0.00000115308,
            "quote_USD_market_cap": 451764000
        },
        {
            "ts": "2023-05-12T03:28:00.000Z",
            "quote_USD_price": 0.0000011645,
            "quote_USD_market_cap": 456238000
        },
        {
            "ts": "2023-05-12T03:37:00.000Z",
            "quote_USD_price": 0.00000116761,
            "quote_USD_market_cap": 457460000
        },
        {
            "ts": "2023-05-12T03:48:00.000Z",
            "quote_USD_price": 0.00000117446,
            "quote_USD_market_cap": 460140000
        },
        {
            "ts": "2023-05-12T03:57:00.000Z",
            "quote_USD_price": 0.00000116329,
            "quote_USD_market_cap": 455767000
        },
        {
            "ts": "2023-05-12T04:08:00.000Z",
            "quote_USD_price": 0.00000118343,
            "quote_USD_market_cap": 463657000
        },
        {
            "ts": "2023-05-12T04:18:00.000Z",
            "quote_USD_price": 0.00000118584,
            "quote_USD_market_cap": 464600000
        },
        {
            "ts": "2023-05-12T04:27:00.000Z",
            "quote_USD_price": 0.00000125824,
            "quote_USD_market_cap": 492966000
        },
        {
            "ts": "2023-05-12T04:37:00.000Z",
            "quote_USD_price": 0.00000123653,
            "quote_USD_market_cap": 484460000
        },
        {
            "ts": "2023-05-12T04:48:00.000Z",
            "quote_USD_price": 0.00000124203,
            "quote_USD_market_cap": 486613000
        },
        {
            "ts": "2023-05-12T04:57:00.000Z",
            "quote_USD_price": 0.00000124314,
            "quote_USD_market_cap": 487048000
        },
        {
            "ts": "2023-05-12T05:07:00.000Z",
            "quote_USD_price": 0.00000123399,
            "quote_USD_market_cap": 483463000
        },
        {
            "ts": "2023-05-12T05:17:00.000Z",
            "quote_USD_price": 0.00000121471,
            "quote_USD_market_cap": 475912000
        },
        {
            "ts": "2023-05-12T05:28:00.000Z",
            "quote_USD_price": 0.00000120229,
            "quote_USD_market_cap": 471045000
        },
        {
            "ts": "2023-05-12T05:37:00.000Z",
            "quote_USD_price": 0.00000119864,
            "quote_USD_market_cap": 469615000
        },
        {
            "ts": "2023-05-12T05:47:00.000Z",
            "quote_USD_price": 0.00000119677,
            "quote_USD_market_cap": 468882000
        },
        {
            "ts": "2023-05-12T05:57:00.000Z",
            "quote_USD_price": 0.0000011157,
            "quote_USD_market_cap": 437122000
        },
        {
            "ts": "2023-05-12T06:08:00.000Z",
            "quote_USD_price": 0.00000113745,
            "quote_USD_market_cap": 445642000
        },
        {
            "ts": "2023-05-12T06:18:00.000Z",
            "quote_USD_price": 0.00000108397,
            "quote_USD_market_cap": 424687000
        },
        {
            "ts": "2023-05-12T06:27:00.000Z",
            "quote_USD_price": 0.0000010958,
            "quote_USD_market_cap": 429323000
        },
        {
            "ts": "2023-05-12T06:37:00.000Z",
            "quote_USD_price": 0.00000112257,
            "quote_USD_market_cap": 439811000
        },
        {
            "ts": "2023-05-12T06:48:00.000Z",
            "quote_USD_price": 0.00000113099,
            "quote_USD_market_cap": 443111000
        },
        {
            "ts": "2023-05-12T06:57:00.000Z",
            "quote_USD_price": 0.00000113094,
            "quote_USD_market_cap": 443090000
        },
        {
            "ts": "2023-05-12T07:07:00.000Z",
            "quote_USD_price": 0.00000117706,
            "quote_USD_market_cap": 461159000
        },
        {
            "ts": "2023-05-12T07:17:00.000Z",
            "quote_USD_price": 0.00000116489,
            "quote_USD_market_cap": 456392000
        },
        {
            "ts": "2023-05-12T07:28:00.000Z",
            "quote_USD_price": 0.00000117679,
            "quote_USD_market_cap": 461053000
        },
        {
            "ts": "2023-05-12T07:38:00.000Z",
            "quote_USD_price": 0.0000011767,
            "quote_USD_market_cap": 461020000
        },
        {
            "ts": "2023-05-12T07:48:00.000Z",
            "quote_USD_price": 0.00000118452,
            "quote_USD_market_cap": 464084000
        },
        {
            "ts": "2023-05-12T07:57:00.000Z",
            "quote_USD_price": 0.00000120464,
            "quote_USD_market_cap": 471966000
        },
        {
            "ts": "2023-05-12T08:07:00.000Z",
            "quote_USD_price": 0.00000125616,
            "quote_USD_market_cap": 492152000
        },
        {
            "ts": "2023-05-12T08:18:00.000Z",
            "quote_USD_price": 0.00000123283,
            "quote_USD_market_cap": 483009000
        },
        {
            "ts": "2023-05-12T08:27:00.000Z",
            "quote_USD_price": 0.00000121225,
            "quote_USD_market_cap": 474948000
        },
        {
            "ts": "2023-05-12T08:37:00.000Z",
            "quote_USD_price": 0.00000119496,
            "quote_USD_market_cap": 468172000
        },
        {
            "ts": "2023-05-12T08:48:00.000Z",
            "quote_USD_price": 0.00000122603,
            "quote_USD_market_cap": 480345000
        },
        {
            "ts": "2023-05-12T08:58:00.000Z",
            "quote_USD_price": 0.00000122631,
            "quote_USD_market_cap": 480454000
        },
        {
            "ts": "2023-05-12T09:08:00.000Z",
            "quote_USD_price": 0.00000127517,
            "quote_USD_market_cap": 499599000
        },
        {
            "ts": "2023-05-12T09:18:00.000Z",
            "quote_USD_price": 0.00000127409,
            "quote_USD_market_cap": 499176000
        },
        {
            "ts": "2023-05-12T09:27:00.000Z",
            "quote_USD_price": 0.0000012641,
            "quote_USD_market_cap": 495260000
        },
        {
            "ts": "2023-05-12T09:37:00.000Z",
            "quote_USD_price": 0.00000125816,
            "quote_USD_market_cap": 492935000
        },
        {
            "ts": "2023-05-12T09:47:00.000Z",
            "quote_USD_price": 0.00000126021,
            "quote_USD_market_cap": 493739000
        },
        {
            "ts": "2023-05-12T09:58:00.000Z",
            "quote_USD_price": 0.00000127151,
            "quote_USD_market_cap": 498163000
        },
        {
            "ts": "2023-05-12T10:08:00.000Z",
            "quote_USD_price": 0.00000127207,
            "quote_USD_market_cap": 498383000
        },
        {
            "ts": "2023-05-12T10:18:00.000Z",
            "quote_USD_price": 0.00000125434,
            "quote_USD_market_cap": 491436000
        },
        {
            "ts": "2023-05-12T10:28:00.000Z",
            "quote_USD_price": 0.00000123689,
            "quote_USD_market_cap": 484602000
        },
        {
            "ts": "2023-05-12T10:38:00.000Z",
            "quote_USD_price": 0.00000123657,
            "quote_USD_market_cap": 484478000
        },
        {
            "ts": "2023-05-12T10:48:00.000Z",
            "quote_USD_price": 0.0000012421,
            "quote_USD_market_cap": 486644000
        },
        {
            "ts": "2023-05-12T10:57:00.000Z",
            "quote_USD_price": 0.00000125495,
            "quote_USD_market_cap": 491676000
        },
        {
            "ts": "2023-05-12T11:07:00.000Z",
            "quote_USD_price": 0.00000126598,
            "quote_USD_market_cap": 496000000
        },
        {
            "ts": "2023-05-12T11:18:00.000Z",
            "quote_USD_price": 0.00000129008,
            "quote_USD_market_cap": 505441000
        },
        {
            "ts": "2023-05-12T11:28:00.000Z",
            "quote_USD_price": 0.00000127626,
            "quote_USD_market_cap": 500027000
        },
        {
            "ts": "2023-05-12T11:37:00.000Z",
            "quote_USD_price": 0.00000126743,
            "quote_USD_market_cap": 496565000
        },
        {
            "ts": "2023-05-12T11:47:00.000Z",
            "quote_USD_price": 0.00000126925,
            "quote_USD_market_cap": 497280000
        },
        {
            "ts": "2023-05-12T11:57:00.000Z",
            "quote_USD_price": 0.00000127724,
            "quote_USD_market_cap": 500411000
        },
        {
            "ts": "2023-05-12T12:07:00.000Z",
            "quote_USD_price": 0.00000128854,
            "quote_USD_market_cap": 504838000
        },
        {
            "ts": "2023-05-12T12:18:00.000Z",
            "quote_USD_price": 0.00000128385,
            "quote_USD_market_cap": 503001000
        },
        {
            "ts": "2023-05-12T12:27:00.000Z",
            "quote_USD_price": 0.00000127622,
            "quote_USD_market_cap": 500011000
        },
        {
            "ts": "2023-05-12T12:37:00.000Z",
            "quote_USD_price": 0.00000131104,
            "quote_USD_market_cap": 513654000
        },
        {
            "ts": "2023-05-12T12:47:00.000Z",
            "quote_USD_price": 0.00000128949,
            "quote_USD_market_cap": 505210000
        },
        {
            "ts": "2023-05-12T12:58:00.000Z",
            "quote_USD_price": 0.00000127646,
            "quote_USD_market_cap": 500104000
        },
        {
            "ts": "2023-05-12T13:07:00.000Z",
            "quote_USD_price": 0.00000127596,
            "quote_USD_market_cap": 499908000
        },
        {
            "ts": "2023-05-12T13:18:00.000Z",
            "quote_USD_price": 0.00000125691,
            "quote_USD_market_cap": 492444000
        },
        {
            "ts": "2023-05-12T13:28:00.000Z",
            "quote_USD_price": 0.00000127308,
            "quote_USD_market_cap": 498781000
        },
        {
            "ts": "2023-05-12T13:38:00.000Z",
            "quote_USD_price": 0.00000127463,
            "quote_USD_market_cap": 499386000
        },
        {
            "ts": "2023-05-12T13:47:00.000Z",
            "quote_USD_price": 0.00000127205,
            "quote_USD_market_cap": 498376000
        },
        {
            "ts": "2023-05-12T13:57:00.000Z",
            "quote_USD_price": 0.00000127564,
            "quote_USD_market_cap": 499785000
        },
        {
            "ts": "2023-05-12T14:08:00.000Z",
            "quote_USD_price": 0.00000126426,
            "quote_USD_market_cap": 495323000
        },
        {
            "ts": "2023-05-12T14:17:00.000Z",
            "quote_USD_price": 0.00000128841,
            "quote_USD_market_cap": 504787000
        },
        {
            "ts": "2023-05-12T14:28:00.000Z",
            "quote_USD_price": 0.00000128022,
            "quote_USD_market_cap": 501577000
        },
        {
            "ts": "2023-05-12T14:37:00.000Z",
            "quote_USD_price": 0.00000126772,
            "quote_USD_market_cap": 496681000
        },
        {
            "ts": "2023-05-12T14:47:00.000Z",
            "quote_USD_price": 0.00000124498,
            "quote_USD_market_cap": 487769000
        },
        {
            "ts": "2023-05-12T14:57:00.000Z",
            "quote_USD_price": 0.0000011864,
            "quote_USD_market_cap": 464818000
        },
        {
            "ts": "2023-05-12T15:07:00.000Z",
            "quote_USD_price": 0.00000120194,
            "quote_USD_market_cap": 470909000
        },
        {
            "ts": "2023-05-12T15:18:00.000Z",
            "quote_USD_price": 0.00000118566,
            "quote_USD_market_cap": 464528000
        },
        {
            "ts": "2023-05-12T15:28:00.000Z",
            "quote_USD_price": 0.00000118409,
            "quote_USD_market_cap": 463915000
        },
        {
            "ts": "2023-05-12T15:38:00.000Z",
            "quote_USD_price": 0.00000117453,
            "quote_USD_market_cap": 460169000
        },
        {
            "ts": "2023-05-12T15:48:00.000Z",
            "quote_USD_price": 0.00000118267,
            "quote_USD_market_cap": 463357000
        },
        {
            "ts": "2023-05-12T15:57:00.000Z",
            "quote_USD_price": 0.00000118286,
            "quote_USD_market_cap": 463432000
        },
        {
            "ts": "2023-05-12T16:08:00.000Z",
            "quote_USD_price": 0.00000116886,
            "quote_USD_market_cap": 457949000
        },
        {
            "ts": "2023-05-12T16:18:00.000Z",
            "quote_USD_price": 0.00000117916,
            "quote_USD_market_cap": 461984000
        },
        {
            "ts": "2023-05-12T16:28:00.000Z",
            "quote_USD_price": 0.00000121613,
            "quote_USD_market_cap": 476466000
        },
        {
            "ts": "2023-05-12T16:38:00.000Z",
            "quote_USD_price": 0.00000121979,
            "quote_USD_market_cap": 477901000
        },
        {
            "ts": "2023-05-12T16:48:00.000Z",
            "quote_USD_price": 0.00000121347,
            "quote_USD_market_cap": 475424000
        },
        {
            "ts": "2023-05-12T16:58:00.000Z",
            "quote_USD_price": 0.00000120958,
            "quote_USD_market_cap": 473903000
        },
        {
            "ts": "2023-05-12T17:08:00.000Z",
            "quote_USD_price": 0.00000123294,
            "quote_USD_market_cap": 483055000
        },
        {
            "ts": "2023-05-12T17:18:00.000Z",
            "quote_USD_price": 0.00000124378,
            "quote_USD_market_cap": 487300000
        },
        {
            "ts": "2023-05-12T17:27:00.000Z",
            "quote_USD_price": 0.00000125348,
            "quote_USD_market_cap": 491101000
        },
        {
            "ts": "2023-05-12T17:38:00.000Z",
            "quote_USD_price": 0.00000134101,
            "quote_USD_market_cap": 525395000
        },
        {
            "ts": "2023-05-12T17:47:00.000Z",
            "quote_USD_price": 0.00000133759,
            "quote_USD_market_cap": 524055000
        },
        {
            "ts": "2023-05-12T17:58:00.000Z",
            "quote_USD_price": 0.00000133835,
            "quote_USD_market_cap": 524351000
        },
        {
            "ts": "2023-05-12T18:08:00.000Z",
            "quote_USD_price": 0.00000134853,
            "quote_USD_market_cap": 528339000
        },
        {
            "ts": "2023-05-12T18:17:00.000Z",
            "quote_USD_price": 0.0000013586,
            "quote_USD_market_cap": 532286000
        },
        {
            "ts": "2023-05-12T18:27:00.000Z",
            "quote_USD_price": 0.00000135028,
            "quote_USD_market_cap": 529026000
        },
        {
            "ts": "2023-05-12T18:37:00.000Z",
            "quote_USD_price": 0.00000137043,
            "quote_USD_market_cap": 536920000
        },
        {
            "ts": "2023-05-12T18:48:00.000Z",
            "quote_USD_price": 0.00000134847,
            "quote_USD_market_cap": 528319000
        },
        {
            "ts": "2023-05-12T18:58:00.000Z",
            "quote_USD_price": 0.00000134215,
            "quote_USD_market_cap": 525841000
        },
        {
            "ts": "2023-05-12T19:08:00.000Z",
            "quote_USD_price": 0.00000135913,
            "quote_USD_market_cap": 532493000
        },
        {
            "ts": "2023-05-12T19:18:00.000Z",
            "quote_USD_price": 0.00000138411,
            "quote_USD_market_cap": 542280000
        },
        {
            "ts": "2023-05-12T19:27:00.000Z",
            "quote_USD_price": 0.00000136041,
            "quote_USD_market_cap": 532997000
        },
        {
            "ts": "2023-05-12T19:38:00.000Z",
            "quote_USD_price": 0.00000133925,
            "quote_USD_market_cap": 524707000
        },
        {
            "ts": "2023-05-12T19:47:00.000Z",
            "quote_USD_price": 0.00000141586,
            "quote_USD_market_cap": 554719000
        },
        {
            "ts": "2023-05-12T19:57:00.000Z",
            "quote_USD_price": 0.00000144476,
            "quote_USD_market_cap": 566044000
        },
        {
            "ts": "2023-05-12T20:07:00.000Z",
            "quote_USD_price": 0.00000149738,
            "quote_USD_market_cap": 586659000
        },
        {
            "ts": "2023-05-12T20:17:00.000Z",
            "quote_USD_price": 0.0000014949,
            "quote_USD_market_cap": 585686000
        },
        {
            "ts": "2023-05-12T20:28:00.000Z",
            "quote_USD_price": 0.00000153575,
            "quote_USD_market_cap": 601693000
        },
        {
            "ts": "2023-05-12T20:37:00.000Z",
            "quote_USD_price": 0.0000015261,
            "quote_USD_market_cap": 597911000
        },
        {
            "ts": "2023-05-12T20:47:00.000Z",
            "quote_USD_price": 0.0000015261,
            "quote_USD_market_cap": 597912000
        },
        {
            "ts": "2023-05-12T20:58:00.000Z",
            "quote_USD_price": 0.00000153525,
            "quote_USD_market_cap": 601496000
        },
        {
            "ts": "2023-05-12T21:08:00.000Z",
            "quote_USD_price": 0.00000156968,
            "quote_USD_market_cap": 614985000
        },
        {
            "ts": "2023-05-12T21:18:00.000Z",
            "quote_USD_price": 0.00000156634,
            "quote_USD_market_cap": 613675000
        },
        {
            "ts": "2023-05-12T21:27:00.000Z",
            "quote_USD_price": 0.00000154148,
            "quote_USD_market_cap": 603935000
        },
        {
            "ts": "2023-05-12T21:37:00.000Z",
            "quote_USD_price": 0.00000154984,
            "quote_USD_market_cap": 607213000
        },
        {
            "ts": "2023-05-12T21:47:00.000Z",
            "quote_USD_price": 0.00000157913,
            "quote_USD_market_cap": 618686000
        },
        {
            "ts": "2023-05-12T21:58:00.000Z",
            "quote_USD_price": 0.0000015821,
            "quote_USD_market_cap": 619850000
        },
        {
            "ts": "2023-05-12T22:07:00.000Z",
            "quote_USD_price": 0.00000158294,
            "quote_USD_market_cap": 620179000
        },
        {
            "ts": "2023-05-12T22:17:00.000Z",
            "quote_USD_price": 0.00000159144,
            "quote_USD_market_cap": 623509000
        },
        {
            "ts": "2023-05-12T22:27:00.000Z",
            "quote_USD_price": 0.0000015942,
            "quote_USD_market_cap": 624590000
        },
        {
            "ts": "2023-05-12T22:37:00.000Z",
            "quote_USD_price": 0.00000155919,
            "quote_USD_market_cap": 610875000
        },
        {
            "ts": "2023-05-12T22:48:00.000Z",
            "quote_USD_price": 0.00000154513,
            "quote_USD_market_cap": 605365000
        },
        {
            "ts": "2023-05-12T22:57:00.000Z",
            "quote_USD_price": 0.00000154022,
            "quote_USD_market_cap": 603443000
        },
        {
            "ts": "2023-05-12T23:07:00.000Z",
            "quote_USD_price": 0.00000154393,
            "quote_USD_market_cap": 604896000
        },
        {
            "ts": "2023-05-12T23:17:00.000Z",
            "quote_USD_price": 0.00000154718,
            "quote_USD_market_cap": 606169000
        },
        {
            "ts": "2023-05-12T23:27:00.000Z",
            "quote_USD_price": 0.00000156645,
            "quote_USD_market_cap": 613720000
        },
        {
            "ts": "2023-05-12T23:38:00.000Z",
            "quote_USD_price": 0.0000015888,
            "quote_USD_market_cap": 622477000
        },
        {
            "ts": "2023-05-12T23:48:00.000Z",
            "quote_USD_price": 0.0000017505,
            "quote_USD_market_cap": 685828000
        },
        {
            "ts": "2023-05-12T23:58:00.000Z",
            "quote_USD_price": 0.00000173501,
            "quote_USD_market_cap": 679760000
        },
        {
            "ts": "2023-05-13T00:07:00.000Z",
            "quote_USD_price": 0.00000172082,
            "quote_USD_market_cap": 674201000
        },
        {
            "ts": "2023-05-13T00:18:00.000Z",
            "quote_USD_price": 0.00000167373,
            "quote_USD_market_cap": 655752000
        },
        {
            "ts": "2023-05-13T00:27:00.000Z",
            "quote_USD_price": 0.00000166047,
            "quote_USD_market_cap": 650556000
        },
        {
            "ts": "2023-05-13T00:38:00.000Z",
            "quote_USD_price": 0.0000016628,
            "quote_USD_market_cap": 651468000
        },
        {
            "ts": "2023-05-13T00:48:00.000Z",
            "quote_USD_price": 0.00000165812,
            "quote_USD_market_cap": 649634000
        },
        {
            "ts": "2023-05-13T00:58:00.000Z",
            "quote_USD_price": 0.00000166116,
            "quote_USD_market_cap": 650825000
        },
        {
            "ts": "2023-05-13T01:08:00.000Z",
            "quote_USD_price": 0.00000161547,
            "quote_USD_market_cap": 632925000
        },
        {
            "ts": "2023-05-13T01:18:00.000Z",
            "quote_USD_price": 0.00000163779,
            "quote_USD_market_cap": 641668000
        },
        {
            "ts": "2023-05-13T01:28:00.000Z",
            "quote_USD_price": 0.00000164895,
            "quote_USD_market_cap": 646041000
        },
        {
            "ts": "2023-05-13T01:37:00.000Z",
            "quote_USD_price": 0.00000164351,
            "quote_USD_market_cap": 643910000
        },
        {
            "ts": "2023-05-13T01:47:00.000Z",
            "quote_USD_price": 0.00000165602,
            "quote_USD_market_cap": 648814000
        },
        {
            "ts": "2023-05-13T01:57:00.000Z",
            "quote_USD_price": 0.00000158614,
            "quote_USD_market_cap": 621433000
        },
        {
            "ts": "2023-05-13T02:08:00.000Z",
            "quote_USD_price": 0.00000158692,
            "quote_USD_market_cap": 621738000
        },
        {
            "ts": "2023-05-13T02:18:00.000Z",
            "quote_USD_price": 0.00000159418,
            "quote_USD_market_cap": 624582000
        },
        {
            "ts": "2023-05-13T02:28:00.000Z",
            "quote_USD_price": 0.00000160624,
            "quote_USD_market_cap": 629310000
        },
        {
            "ts": "2023-05-13T02:38:00.000Z",
            "quote_USD_price": 0.00000159812,
            "quote_USD_market_cap": 626129000
        },
        {
            "ts": "2023-05-13T02:48:00.000Z",
            "quote_USD_price": 0.00000159253,
            "quote_USD_market_cap": 623936000
        },
        {
            "ts": "2023-05-13T02:57:00.000Z",
            "quote_USD_price": 0.00000157993,
            "quote_USD_market_cap": 618999000
        },
        {
            "ts": "2023-05-13T03:07:00.000Z",
            "quote_USD_price": 0.0000015947,
            "quote_USD_market_cap": 624787000
        },
        {
            "ts": "2023-05-13T03:18:00.000Z",
            "quote_USD_price": 0.00000159458,
            "quote_USD_market_cap": 624741000
        },
        {
            "ts": "2023-05-13T03:28:00.000Z",
            "quote_USD_price": 0.00000159084,
            "quote_USD_market_cap": 623277000
        },
        {
            "ts": "2023-05-13T03:37:00.000Z",
            "quote_USD_price": 0.0000015951,
            "quote_USD_market_cap": 624944000
        },
        {
            "ts": "2023-05-13T03:47:00.000Z",
            "quote_USD_price": 0.00000166541,
            "quote_USD_market_cap": 652491000
        },
        {
            "ts": "2023-05-13T03:57:00.000Z",
            "quote_USD_price": 0.00000163533,
            "quote_USD_market_cap": 640707000
        },
        {
            "ts": "2023-05-13T04:08:00.000Z",
            "quote_USD_price": 0.00000162678,
            "quote_USD_market_cap": 637357000
        },
        {
            "ts": "2023-05-13T04:17:00.000Z",
            "quote_USD_price": 0.00000161055,
            "quote_USD_market_cap": 630997000
        },
        {
            "ts": "2023-05-13T04:27:00.000Z",
            "quote_USD_price": 0.00000161852,
            "quote_USD_market_cap": 634122000
        },
        {
            "ts": "2023-05-13T04:37:00.000Z",
            "quote_USD_price": 0.0000016202,
            "quote_USD_market_cap": 634777000
        },
        {
            "ts": "2023-05-13T04:47:00.000Z",
            "quote_USD_price": 0.0000016105,
            "quote_USD_market_cap": 630977000
        },
        {
            "ts": "2023-05-13T04:57:00.000Z",
            "quote_USD_price": 0.00000158384,
            "quote_USD_market_cap": 620532000
        },
        {
            "ts": "2023-05-13T05:08:00.000Z",
            "quote_USD_price": 0.000001572,
            "quote_USD_market_cap": 615895000
        },
        {
            "ts": "2023-05-13T05:17:00.000Z",
            "quote_USD_price": 0.00000158965,
            "quote_USD_market_cap": 622809000
        },
        {
            "ts": "2023-05-13T05:27:00.000Z",
            "quote_USD_price": 0.00000161218,
            "quote_USD_market_cap": 631637000
        },
        {
            "ts": "2023-05-31T23:57:00.000Z",
            "quote_USD_price": 0.0000012619,
            "quote_USD_market_cap": 494401000
        },
        {
            "ts": "2023-06-01T23:57:00.000Z",
            "quote_USD_price": 0.00000124505,
            "quote_USD_market_cap": 487797000
        },
        {
            "ts": "2023-06-02T23:58:00.000Z",
            "quote_USD_price": 0.00000128435,
            "quote_USD_market_cap": 503196000
        },
        {
            "ts": "2023-06-03T23:58:00.000Z",
            "quote_USD_price": 0.00000129314,
            "quote_USD_market_cap": 506641000
        },
        {
            "ts": "2023-06-04T23:58:00.000Z",
            "quote_USD_price": 0.00000123869,
            "quote_USD_market_cap": 485306000
        },
        {
            "ts": "2023-06-05T23:57:00.000Z",
            "quote_USD_price": 0.00000103856,
            "quote_USD_market_cap": 406897000
        },
        {
            "ts": "2023-06-06T23:58:00.000Z",
            "quote_USD_price": 0.00000120198,
            "quote_USD_market_cap": 470923000
        },
        {
            "ts": "2023-06-07T23:57:00.000Z",
            "quote_USD_price": 0.00000107734,
            "quote_USD_market_cap": 422091000
        },
        {
            "ts": "2023-06-09T23:57:00.000Z",
            "quote_USD_price": 0.00000113542,
            "quote_USD_market_cap": 444846000
        },
        {
            "ts": "2023-06-10T23:57:00.000Z",
            "quote_USD_price": 9.32387e-7,
            "quote_USD_market_cap": 365300000
        },
        {
            "ts": "2023-06-11T23:57:00.000Z",
            "quote_USD_price": 9.12395e-7,
            "quote_USD_market_cap": 357467000
        },
        {
            "ts": "2023-06-12T23:57:00.000Z",
            "quote_USD_price": 9.05661e-7,
            "quote_USD_market_cap": 354829000
        },
        {
            "ts": "2023-06-13T22:58:00.000Z",
            "quote_USD_price": 9.13467e-7,
            "quote_USD_market_cap": 357887000
        },
        {
            "ts": "2023-06-14T22:57:00.000Z",
            "quote_USD_price": 8.89115e-7,
            "quote_USD_market_cap": 348346000
        },
        {
            "ts": "2023-06-15T22:57:00.000Z",
            "quote_USD_price": 9.05113e-7,
            "quote_USD_market_cap": 354614000
        }
    ]
  }

const ChartView = ({ chartData }: any) => {
    const { data = [], title, render_type } = chartData;
    return (
        <ChartViewContainer>
            
        </ChartViewContainer>
    )

};

export default ChartView;
