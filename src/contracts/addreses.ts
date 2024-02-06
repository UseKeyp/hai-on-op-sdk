import { WETH, ARB, OD, WSTETH, CBETH, RETH } from '../utils'

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
    | 'CAMELOT_WSTETH_NITRO_POOL'
    | 'CAMELOT_RETH_NITRO_POOL'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'arbitrum' | 'arbitrum-sepolia'

const addresses: Record<GebDeployment, ContractList> = {
    'arbitrum-sepolia': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f',
        GEB_SYSTEM_COIN: '0x0006d00Ae8375BDb0b10fBb100490CD5504fD802',
        GEB_PROTOCOL_TOKEN: '0x000e59706a2d1151721F5ef09ad311985d4267f9',
        GEB_SAFE_ENGINE: '0x1f5a89FD455FD216B34C406a643B963fe5ceA590',
        GEB_ORACLE_RELAYER: '0xf4dcD9000922b42854E7fE54F3E2a2DC22Cc6Ed5',
        GEB_SURPLUS_AUCTION_HOUSE: '0x59F7e0B28A9a5F1c19c186Db696d4D7ADCac806F',
        GEB_DEBT_AUCTION_HOUSE: '0x0905014Fe6C74e691c2cd00e0f1F8c4561D629C8',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x45C9D97AcA464162C4499527AD20683dE47a3dE9',
        GEB_ACCOUNTING_ENGINE: '0xCcb14A69Eae9eA51F16D7C602c621303Af1Fbc22',
        GEB_LIQUIDATION_ENGINE: '0xd744ba2BAd75FC1674b99D40c0A2B5fBDDB835D4',
        GEB_COIN_JOIN: '0xc72E00bbce6E76bb48e44B0F1BC92D5f15a5af73',
        GEB_COLLATERAL_JOIN_FACTORY: '0x0B1F7a0d2F71452a21E2805042E56Ae28ce755aC',
        GEB_TAX_COLLECTOR: '0x6CB85048caaA1d670Ad4AFa18d3c3de1C45b0C74',
        GEB_STABILITY_FEE_TREASURY: '0xa385Eb5603FD0d8223a66520EEfA366cD987ff40',
        GEB_GLOBAL_SETTLEMENT: '0x8B777768Eba27f1161b1573d8A5e7334f4714a5A',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x2e83b2836766479d1E0Fe56B42A5988e85E0C4d7',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x4120291384d23dC591Df57a591AB7055923BfAf0',
        GEB_RRFM_SETTER: '0xAa39DD9cFfB9984A8ab5Ae3daeE1770Ef07Afd98',
        GEB_RRFM_CALCULATOR: '0x2241ed6EA90FFd6fad2e586FF630A52c4020E340',
        SAFE_MANAGER: '0xea1bF408bF3f29C4787712E67390552163a465f3',
        PROXY_BASIC_ACTIONS: '0x65AA70ed223368119D34C6a24a5050b446Ce74f7',
        PROXY_REGISTRY: '0x00024F3c588d9a1c11Be800637b43E0C88befF1A',
        PROXY_DEBT_AUCTION_ACTIONS: '0x51905778Af208271a6Cb817617C21ACa961C3B20',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x3DE22DE876C56011c3Ffa6139f089138e34bB538',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x696C34Dfcc907e93cbAb4924126664E79b0b155c',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x8c6A844c3adCe310B7502C137eb1Ad4B9B0dDced',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x555b26c14eB5Fbc6483E1A749DAF470520de1991',
        PROXY_REWARDED_ACTIONS: '0xc9c31849a7f32885A0f1BDE98ec9181F06198CfD',
        JOB_ACCOUNTING: '0xfbC2F8ff792B924644CFE88cf75E6373c93c0186',
        JOB_LIQUIDATION: '0x8E1Ce955669121ac719107660EA17505AD1Dba34',
        JOB_ORACLES: '0xF1c6949E650b3b644e9B297A7f8472A23f52803B',
        CAMELOT_WSTETH_NITRO_POOL: '0x0000000000000000000000000000000000000000',
        CAMELOT_RETH_NITRO_POOL: '0x0000000000000000000000000000000000000000',
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
        PROXY_REGISTRY: '0x0000000000000000000000000000000000000000',
        PROXY_BASIC_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_DEBT_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_REWARDED_ACTIONS: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_JOIN_FACTORY: '0x0000000000000000000000000000000000000000',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x0000000000000000000000000000000000000000',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x0000000000000000000000000000000000000000',
        JOB_ACCOUNTING: '0x0000000000000000000000000000000000000000',
        JOB_LIQUIDATION: '0x0000000000000000000000000000000000000000',
        JOB_ORACLES: '0x0000000000000000000000000000000000000000',
        CAMELOT_WSTETH_NITRO_POOL: '0x4391D56A8E56BE1fB30a45bAa0E5B7a4b488FbAa', // Test pool address
        CAMELOT_RETH_NITRO_POOL: '0xCb0E3ab1EA61598029111e360b0a999f0E6067fd', // Test pool address
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
    camelotPoolAddress?: string
    chainlinkRelayer?: string
}

export type TokenList = {
    [key: string]: TokenData
}

const tokens: Record<GebDeployment, TokenList> = {
    // TODO: Replace with mainnet addresses

    'arbitrum-sepolia': {
        OD: {
            address: '0x0006d00Ae8375BDb0b10fBb100490CD5504fD802',
            decimals: 18,
            symbol: 'OD',
            bytes32String: OD,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0x167c118AAB87c015Ef954dBe2FeD6C87c0038C0a',
        },
        ODG: {
            address: '0x000e59706a2d1151721F5ef09ad311985d4267f9',
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        WETH: {
            address: '0x0091f4e75a03C11cB9be8E3717219005eb780D89',
            collateralJoin: '',
            collateralAuctionHouse: '',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            isCollateral: false,
            chainlinkRelayer: '',
        },
        WSTETH: {
            address: '0x28708a74510BB214B685FfB371d593c51F597fC3',
            collateralJoin: '0x64d50121A7CC5E5FC7D7A3b8a989882b3a130a14',
            collateralAuctionHouse: '0xfF5C82f097ec061AEb381987E55c0789e079EaD5',
            decimals: 8,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            isCollateral: true,
        },
        CBETH: {
            address: '0xD2079b64b5858A4981675916a0d96B1e4A1495Ea',
            collateralJoin: '0x1163D5a95AdBCe8b790A6e2a3de1737bE3C101CC',
            collateralAuctionHouse: '0x802e5bdd6A55F9aF350d3CbF5468Ee5232fD4736',
            decimals: 8,
            symbol: 'CBETH',
            bytes32String: CBETH,
            isCollateral: true,
        },
        RETH: {
            address: '0x9b1f544DCE4692A0B157bE6B9F20f1909899fFDB',
            collateralJoin: '0x8fF16f9f510f699fe1D9ae9778185557c59378e8',
            collateralAuctionHouse: '0x5ff631684f3dcF6430764C002b7184b9757C814c',
            decimals: 3,
            symbol: 'RETH',
            bytes32String: RETH,
            isCollateral: true,
        },
        ARB: {
            address: '0x53865560cfA2d952F255Dd7d5c61C49C350a25Fd',
            collateralJoin: '0xAf8F2CE440509279645e8747c0DBc2700ce0559F',
            collateralAuctionHouse: '0x1C788DD757060ee01aF63C772aA2eB58b60152aE',
            decimals: 18,
            symbol: 'ARB',
            bytes32String: ARB,
            isCollateral: true,
        },
    },
    arbitrum: {
        OD: {
            address: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            symbol: 'OD',
            bytes32String: OD,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0x0000000000000000000000000000000000000000',
        },
        ODG: {
            address: '0x0dc0caB40adDB6694B089dEdfC35B694a9B60Aac', // Test ODG
            // address: '0x000D636bD52BFc1B3a699165Ef5aa340BEA8939c',  // Actual ODG
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0xF935263c9950EB2881FF58Bd6a76c3D2564A78D5', // Actual swap pool
        },
        WETH: {
            address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
            collateralJoin: '',
            collateralAuctionHouse: '',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            isCollateral: false,
            chainlinkRelayer: '',
        },
        WSTETH: {
            address: '0xE5A21382f6ef9c3B6F873f69d583fFD3b91449F0', // Test WSTETH
            // address: '0x5979d7b546e38e414f7e9822514be443a4800529' // Actual WSTETH
            collateralJoin: '0x0000000000000000000000000000000000000000',
            collateralAuctionHouse: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            isCollateral: true,
            chainlinkRelayer: '',
        },
        // CBETH: {
        //     address: '0x0000000000000000000000000000000000000000',
        //     collateralJoin: '0x0000000000000000000000000000000000000000',
        //     collateralAuctionHouse: '0x0000000000000000000000000000000000000000',
        //     decimals: 18,
        //     symbol: 'CBETH',
        //     bytes32String: CBETH,
        //     isCollateral: true,
        // },
        RETH: {
            address: '0xcbdc45feac9a5a3d2de92013564685152a2d4465', // Test RETH
            // address: '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8', // Actual RETH
            collateralJoin: '0x0000000000000000000000000000000000000000',
            collateralAuctionHouse: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            symbol: 'RETH',
            bytes32String: RETH,
            isCollateral: true,
        },
        ARB: {
            address: '0x912ce59144191c1204e64559fe8253a0e49e6548', // Actual ARB
            collateralJoin: '0x0000000000000000000000000000000000000000',
            collateralAuctionHouse: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            symbol: 'ARB',
            bytes32String: ARB,
            isCollateral: true,
        },
    },
}

const subgraphs: Record<GebDeployment, string> = {
    'arbitrum-sepolia': 'https://api.studio.thegraph.com/query/52770/open-dollar---testnet/v1.6.1-rc.1',
    arbitrum: '',
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

export const getSubgraph = (network: GebDeployment): string => {
    return subgraphs[network]
}
