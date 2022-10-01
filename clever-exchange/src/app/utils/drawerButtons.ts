interface IExchangeButtons {
  exchange: {
    texts: {
      top: string[]
      down: string[]
    }
    paths: {
      top: string[]
      down: string[]
    }
  }
}

interface INFTButtons {
  nft: {
    texts: {
      top: string[]
      down: string[]
    }
    paths: {
      top: string[]
      down: string[]
    }
  }
}

export const exchangeButtons: IExchangeButtons = {
  exchange: {
    texts: {
      top: ['Mercados', 'Câmbio'],
      down: ['NFT', 'Login / Cadastro', 'BR | R$']
    },
    paths: {
      top: ['/pt/markets', '/pt/trade/KLV-USDT'],
      down: ['/pt/nft/collections', '/pt/login', '']
    }
  }
}

export const nftButtons: INFTButtons = {
  nft: {
    texts: {
      top: ['Coleções', 'NFT'],
      down: ['Câmbio', 'Login / Cadastro', 'BR | R$']
    },
    paths: {
      top: ['/pt/nft/collections', '/pt/nft/collections'],
      down: ['pt', '/pt/login', '']
    }
  }
}
