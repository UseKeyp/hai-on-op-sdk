import { WETH, OP, WBTC, STONES, FTRG, TOTEM } from '../utils'

// All keys are mandatory
export type ContractKey =
    | 'MULTICALL'
    | 'ETH'
    | 'GEB_SYSTEM_COIN'
    | 'GEB_PROTOCOL_TOKEN'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_FACTORY'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_COLLATERAL_JOIN_FACTORY'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_CALCULATOR'
    | 'SAFE_MANAGER'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'PROXY_FACTORY'
    | 'PROXY_BASIC_ACTIONS'
    | 'PROXY_REGISTRY'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_CALCULATOR'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_COLLATERAL_AUCTION_ACTIONS'
    | 'PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_GLOBAL_SETTLEMENT_ACTIONS'
    | 'PROXY_REWARDED_ACTIONS'
    | 'JOB_ACCOUNTING'
    | 'JOB_LIQUIDATION'
    | 'JOB_ORACLES'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'arbitrum' | 'optimism-goerli' | 'arbitrum-goerli'

const addresses: Record<GebDeployment, ContractList> = {
    'arbitrum-goerli': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f',
        GEB_SYSTEM_COIN: '0x007b1aC6B1894351cD5B025470119cf07a719d5b',
        GEB_PROTOCOL_TOKEN: '0x1A095c17f8503A79E754371EfBb232c1C0D9cb07',
        GEB_SAFE_ENGINE: '0x3Ea69ED1931929678DE2de8E0b0C8FBd6FA5CFBA',
        GEB_ORACLE_RELAYER: '0x276f2F3e4A5Ca476Ef018cbe8646A5e00Db2dC32',
        GEB_SURPLUS_AUCTION_HOUSE: '0x97Ba91F8161c67eC0f5600f96Aa6B78eEcA83E2f',
        GEB_DEBT_AUCTION_HOUSE: '0x73098945f3e73caf01909C957A6bd65ED910F637',
        GEB_ACCOUNTING_ENGINE: '0xbeed3E8a9F70A91C5bc5f955B71317C456366CFA',
        GEB_LIQUIDATION_ENGINE: '0xd4E8C2463ac3388ddAC401EC91652190805E375E',
        GEB_COIN_JOIN: '0xb340D8890e90AFb7a79f3cFe88Df9E03B4b99b1f',
        GEB_TAX_COLLECTOR: '0xA290676CED25e26828b00294dBbEebCb356CD2E5',
        GEB_STABILITY_FEE_TREASURY: '0xf805849c1dE4627ba171F6C93540F77D9B9E6d20',
        GEB_RRFM_CALCULATOR: '0x63F197A871dF1485311762bc3284c2E4f0A65c0b',
        GEB_RRFM_SETTER: '0xb8E0FF656c799A79F08d44dDaf508D343693DE4e',
        GEB_GLOBAL_SETTLEMENT: '0x472Ec291F772F9FF3D3397553A32EdBfDBd881Ec',
        SAFE_MANAGER: '0xE4a203f79b4DEf769E4624387bEF5516AC74e7B8',
        PROXY_FACTORY: '0x7e65C1e8161e49Ed414bf0C751e9D6B0E370C4db',
        PROXY_REGISTRY: '0x7e65C1e8161e49Ed414bf0C751e9D6B0E370C4db',
        PROXY_BASIC_ACTIONS: '0x3C929D32b85ffF713b15e6d9C3B0D5868B0C9157',
        PROXY_DEBT_AUCTION_ACTIONS: '0xAF44D66b9d035a028328c99f0Adb7AB85928724c',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x267D4BDf13DaDD3Da7C90074E163c44443505CA5',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x92A093f53360ffc42f75f6D00af51E26138725b4',
        PROXY_REWARDED_ACTIONS: '0xA2C86fBae73C2672ace63a732274a1D4c0FE938F',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '',
        GEB_COLLATERAL_JOIN_FACTORY: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '',
        JOB_ACCOUNTING: '',
        JOB_LIQUIDATION: '',
        JOB_ORACLES: '',
    },
    arbitrum: {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x0000000000000000000000000000000000000000',
        GEB_SYSTEM_COIN: '0x0000000000000000000000000000000000000000',
        GEB_PROTOCOL_TOKEN: '0x0000000000000000000000000000000000000000',
        GEB_SAFE_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_ORACLE_RELAYER: '0x0000000000000000000000000000000000000000',
        GEB_SURPLUS_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_DEBT_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_ACCOUNTING_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_LIQUIDATION_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_COIN_JOIN: '0x0000000000000000000000000000000000000000',
        GEB_TAX_COLLECTOR: '0x0000000000000000000000000000000000000000',
        GEB_STABILITY_FEE_TREASURY: '0x0000000000000000000000000000000000000000',
        GEB_RRFM_CALCULATOR: '0x0000000000000000000000000000000000000000',
        GEB_RRFM_SETTER: '0x0000000000000000000000000000000000000000',
        GEB_GLOBAL_SETTLEMENT: '0x0000000000000000000000000000000000000000',
        SAFE_MANAGER: '0x0000000000000000000000000000000000000000',
        PROXY_FACTORY: '0x0000000000000000000000000000000000000000',
        PROXY_REGISTRY: '0x0000000000000000000000000000000000000000',
        PROXY_BASIC_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_DEBT_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_REWARDED_ACTIONS: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '',
        GEB_COLLATERAL_JOIN_FACTORY: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '',
        JOB_ACCOUNTING: '',
        JOB_LIQUIDATION: '',
        JOB_ORACLES: '',
    },
    'optimism-goerli': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0x82535c9585A070BfA914924F6D83F7162D17A869',
        GEB_PROTOCOL_TOKEN: '0xbcc847DdE48E579fa8d98E0d4bd46161A0f84F8A',
        GEB_SAFE_ENGINE: '0x4ADe84BB4da143af07F9f89E00B65E3a08E2035A',
        GEB_ORACLE_RELAYER: '0xB6AA4B291ff95565dd6ECd9F7C811372468520ff',
        GEB_SURPLUS_AUCTION_HOUSE: '0x8e75186BC45ffEbedaA90773670a9f805e661894',
        GEB_DEBT_AUCTION_HOUSE: '0x8D602868C1d00F2A428719d680F81BDe6E1e50A1',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0xf979110B7EEDce98603b504f73Fd71Db5BE8146a',
        GEB_ACCOUNTING_ENGINE: '0x1eC0925d31590dAE3bB9aB7DE65109090B2c510a',
        GEB_LIQUIDATION_ENGINE: '0xd7d402568046651FEDef30AD62d1b876b76F5EE6',
        GEB_COIN_JOIN: '0x8D0452eD670872b91Ee0d4c0450af01840974025',
        GEB_COLLATERAL_JOIN_FACTORY: '0xeB7E2307f2994e9E7C5153E1a3B3407a4BF9B421',
        GEB_TAX_COLLECTOR: '0x99fBdeD15FCCC5D2284c3b07E438C76D3A9d045C',
        GEB_STABILITY_FEE_TREASURY: '0xb6f335AaC75184B8b18Cd5aF12Bd183C2Bd9b571',
        GEB_RRFM_CALCULATOR: '0xB800827d75074Df2152A75aB84fE06351F3E105f',
        GEB_RRFM_SETTER: '0xAafd9E0f3f3afD662bBE6819eaaEB7099bf22E4E',
        GEB_GLOBAL_SETTLEMENT: '0x84DFaefaB51Ce02DE5B7811983B68C9f402f99dd',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0xD486fD908B6637eaEE2dD625A48537a2A4Ed826f',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x8145F99712aA294523403C2B88198D92Da66d6b2',
        SAFE_MANAGER: '0x033Fa671B4743f343b3CA685845e48a412EC0302',
        PROXY_FACTORY: '0x129ed50D28B4A85F3862B25413142FE24eEd185c',
        PROXY_REGISTRY: '0xC33265Bd031D1B57b3555f31B36dB60A8A766Bfa',
        PROXY_BASIC_ACTIONS: '0xD34D69b9063A641F62F2a39CADd2996B54AC1C0b',
        PROXY_DEBT_AUCTION_ACTIONS: '0xb05984f73E7AcD8450B3244A0AB7C073065F4dF3',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x034c184E034c992AbE22F8a7930C03483586E459',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x0c852243Bc5891aC2D418c3b507eBEE99d781e04',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0xa79653eE7CB9ED9f42f026F799433c9aaa4e8A44',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x3ab8129bb9456aE25538f1B3a0694f2D15357110',
        PROXY_REWARDED_ACTIONS: '0x39407e84B77eAF49176740704b9a9eD9a6B2DA4c',
        JOB_ACCOUNTING: '0x2b0Abebdd29c0a0A82aF96E76709c771cCaD194b',
        JOB_LIQUIDATION: '0xbDdCBE327610803B681868A9AE4EF61feA56DD9E',
        JOB_ORACLES: '0xE181f3dE1E196CD939E1006674C9466ACdF74143',
    },
}

export type TokenData = {
    address: string
    decimals: number
    symbol: string
    bytes32String: string
    collateralJoin: string
    collateralAuctionHouse: string
    isCollateral: boolean
}

export type TokenList = {
    [key: string]: TokenData
}

const tokens: Record<GebDeployment, TokenList> = {
    arbitrum: {},
    'arbitrum-goerli': {
        OD: {
            address: '0x007b1aC6B1894351cD5B025470119cf07a719d5b',
            decimals: 18,
            symbol: 'OD',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        ODG: {
            address: '0x1A095c17f8503A79E754371EfBb232c1C0D9cb07',
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        WETH: {
            address: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0xd4F5Dc250893cA025603A03d1fe5650D03fA5891',
            collateralAuctionHouse: '0x74B840D4B626e9bD174F74eFF8a59dE30Fc03eF9',
            isCollateral: true,
        },
        // FTRG: {
        //     address: '',
        //     decimals: 18,
        //     symbol: 'FTRG',
        //     bytes32String: FTRG,
        //     collateralJoin: '0x01c9E717B10605163D5B0beB45ab93497C34E77A',
        //     collateralAuctionHouse: '0xEc467776f0D8FF8FDE41057b8b2D0ed298072edF',
        //     isCollateral: true,
        // },
        WBTC: {
            address: '0xAcFb9e6FD04FE18c56995C8d58C0785042766736',
            decimals: 8,
            symbol: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x32490555704591fF252287E888523bDC0cC42226',
            collateralAuctionHouse: '0xf214ADE436451fbb6909F444efFf7C34C2F2bB92',
            isCollateral: true,
        },
        STN: {
            address: '0x7e6Ee244FA65cEEb8b698E7866E127cD8C7440D0',
            decimals: 3,
            symbol: 'STN',
            bytes32String: STONES,
            collateralJoin: '0xeB8AcA91fc4BcEEc73ee8EE6Bcb3a6608F858bD1',
            collateralAuctionHouse: '0x85b35CEF271e6c9653b308b6130142B41d1992B8',
            isCollateral: true,
        },
        TOTEM: {
            address: '0x0Da1F0E501b20f963Ce671e62E11B09259f714c4',
            decimals: 3,
            symbol: 'TOTEM',
            bytes32String: STONES,
            collateralJoin: '0xC458429Fc706E4d6eA4852592d4d0F3E19563469',
            collateralAuctionHouse: '0x50298A8cAFdB116700Ba84189Ca426464fE872d5',
            isCollateral: true,
        },
    },
    'optimism-goerli': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0x344a156575B6528CC6FfB2BDCA11462B2E1e8b36',
            collateralAuctionHouse: '0x1f89b2f02ff17368417e4D106FAd1E33e448811e',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0x4A54a29b9bA80bfd0056E8E7a96329E4e6906d6d',
            collateralAuctionHouse: '0x742De44F54b157a73484816ECBe71769861956A4',
            isCollateral: true,
        },
        WBTC: {
            address: '0xA5553A3ec007914fC12d648cd9A00164535BFf98',
            decimals: 8,
            symbol: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x523a000b6A840c2927a3f9333F585d01565A9E9A',
            collateralAuctionHouse: '0x3A1Ca3d9c7B5c761776ADd7868D4983d9396B987',
            isCollateral: true,
        },
        STN: {
            address: '0x07Fe26b7a9247311b1587510BAd5B02CD33a7F64',
            decimals: 3,
            symbol: 'STN',
            bytes32String: STONES,
            collateralJoin: '0xAfE7A0565B8Bf0203DCF88D606fa49CF5E13E84f',
            collateralAuctionHouse: '0xFa17ae1cB6b887D6ce074116a09130eF39badAF7',
            isCollateral: true,
        },
        TTM: {
            address: '0x51d5F9Cc09394Ee3cF2601b18F8Af931e19460Bd',
            decimals: 0,
            symbol: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0x96959F8fBBe22eA0d4581d8D2274Ad60e1Fc90dd',
            collateralAuctionHouse: '0xB54D5EBDE6F1c220ce846CE1a64274dfC0dF922b',
            isCollateral: true,
        },
        OD: {
            address: '0x82535c9585A070BfA914924F6D83F7162D17A869',
            decimals: 18,
            symbol: 'OD',
            bytes32String: '',
            collateralJoin: '0x8D0452eD670872b91Ee0d4c0450af01840974025',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        ODG: {
            address: '0xbcc847DdE48E579fa8d98E0d4bd46161A0f84F8A',
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
    },
}

export const getTokenList = (network: GebDeployment): TokenList => {
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}

export const getTokenDetails = (network: GebDeployment, tokenSymbol: string): TokenData | null => {
    const tokenList = getTokenList(network)
    if (tokenSymbol in tokenList) {
        return tokenList[tokenSymbol]
    }
    return null
}
