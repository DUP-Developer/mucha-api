import ItemRepository from '../../modules/item/Repository'

export default async () => {
  // item 1
  const item1 = await ItemRepository.create({
    name: 'Ícones',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item1.data._id, [
    {
      title:
        'Ícones devem ajudar aos usuários a entender melhor as tarefas a serem realizadas na aplicação'
    }
  ])

  // item 2

  const item2 = await ItemRepository.create({
    name: 'Consistência',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item2.data._id, [
    {
      title:
        'O uso dos controles e elementos gráficos na tela (interface) deve ser consistente em todas as telas da aplicação.'
    },
    {
      title:
        'A tela deve possuir uma consistência visual, aparência e forma em todas as telas da aplicação.'
    },
    {
      title:
        'Os controles da interface nesta tela deve ter a mesma funcionalidade e estar igualmente localizada em relação às outras telas da aplicação.'
    },
    {
      title:
        'O tamanho dos textos (títulos, subtítulos, texto normal, etc.) devem estar consistentes em todas as telas da aplicação.'
    },
    {
      title: 'A aplicação deve usar cores'
    }
  ])

  // item 3

  const item3 = await ItemRepository.create({
    name: 'Simplicidade',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item3.data._id, [
    {
      title: 'Os elementos da aplicação devem ser claros e intuitivos.'
    }
  ])

  // item 4

  const item4 = await ItemRepository.create({
    name: 'Textos/Labels',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item4.data._id, [
    {
      title: 'Os textos/labels devem possuir um tamanho mínimo de 18 pontos.'
    },
    {
      title: 'Os textos/labels devem estar em uma fonte sem serifa.'
    },
    {
      title:
        'O tamanho dos textos não devem exceder 90 palavras na tela ou 45 palavras em um quarto da tela.'
    },
    {
      title:
        'Os textos da aplicação devem ser devidamente observadas a uma distância de 3 a 5 metros.'
    }
  ])

  // item 5

  const item5 = await ItemRepository.create({
    name: 'Cores',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item5.data._id, [
    {
      title:
        'As cores devem manter valores RGB dentro do intervalo de 16 - 240.'
    },
    {
      title:
        'Cores fortes, como vermelho e laranja, devem ter baixa intensidade e não deve-se utilizar as cores preta e branco puras. Preferencialmente deve-se utilizar cores frias em relação às quentes.'
    },
    {
      title: 'A aplicação deve usar texto escuto sobre um background claro.'
    }
  ])

  // item 6

  const item6 = await ItemRepository.create({
    name: 'Entrada de dados',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item6.data._id, [
    {
      title: 'Os formulários de entrada de dados devem manter consistência'
    },
    {
      title:
        'A aplicação deve oferecer entradas default (padrão) aos usuários para diminuir o tempo de preenchimento e a possibilidade de entrada de dados incorretos.'
    },
    {
      title:
        'A aplicação deve informar ao usuário o formato de entrada de dados, bem como as unidades dos valores esperados.'
    },
    {
      title:
        'A aplicação deve oferecer a funcionalidade de autocompletar  a entrada de dados com base nos valores mantidos na memória.'
    },
    {
      title:
        'A aplicação deve prover métodos de seleção, por exemplo selecionar os elementos a partir de uma lista de opções, como alternativa à entrada de dados.'
    },
    {
      title:
        'A validação dos dados de entrada deve ser realizada em tempo real, tão logo o usuário insira o dado.'
    }
  ])

  // item 7

  const item7 = await ItemRepository.create({
    name: 'Feedback',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item7.data._id, [
    {
      title: 'A aplicação deve responder claramente às ações dos usuários'
    },
    {
      title:
        'A aplicação deve mostrar claramente onde o usuário está localizado.'
    },
    {
      title:
        'Tarefas canceladas na aplicação devem parar imediatamente e prover um feedback apropriado.'
    },
    {
      title:
        'O usuário deve ser informado se um processo requer uma longa duração para execução, fazendo com que o mesmo precise esperar mais que o habitual.'
    }
  ])

  // item 8

  const item8 = await ItemRepository.create({
    name: 'Foco',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item8.data._id, [
    {
      title:
        'O usuário deve perceber claramente quando os objetos são selecionados ou movidos.'
    },
    {
      title:
        'A aplicação deve facilmente diferenciar uma opção selecionada das outras não selecionadas.'
    }
  ])

  // item

  const item9 = await ItemRepository.create({
    name: 'Margens',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item9.data._id, [
    {
      title:
        'O tamanho dos elementos da tela devem ser proporcionais à distância entre eles.'
    },
    {
      title: 'As margens devem possuir um maior recuo nas laterais.'
    }
  ])

  const item10 = await ItemRepository.create({
    name: 'Configuração',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item10.data._id, [
    {
      title:
        'A aplicação deve permitir que os usuários retornem à configuração default (padrão) ou alguma configuração anterior dos elementos que a compõe.'
    }
  ])

  const item11 = await ItemRepository.create({
    name: 'Undo/Redo',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item11.data._id, [
    {
      title: 'Usuários devem reverter suas ações facilmente.'
    },
    {
      title:
        'A aplicação deve oferecer opções para retornar para um ponto anterior qualquer de uso.'
    },
    {
      title:
        'A aplicação deve oferecer opções de "redo" para as ações ou tarefas da aplicação.'
    }
  ])

  const item12 = await ItemRepository.create({
    name: 'Segurança',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item12.data._id, [
    {
      title:
        'A aplicação deve pedir que o usuário confirme as ações que tenham consequências drásticas, negativas ou destrutivas.'
    }
  ])

  const item13 = await ItemRepository.create({
    name: 'Navegação',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item13.data._id, [
    {
      title:
        'A aplicação deve manter a consistência e coerência da navegação na tela corrente em relação à todas as telas que a compõe.'
    },
    {
      title:
        'A informação deve ser apresentada hierarquicamente (do geral para o específico, por tema, etc.)'
    },
    {
      title:
        'Todas as telas devem ter uma opção para acessar à tela principal, com exceção da mesma.'
    }
  ])

  const item14 = await ItemRepository.create({
    name: 'Controle do usuário',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item14.data._id, [
    {
      title:
        'O usuário deve permitir que o usuário feche, minimize ou maximize a aplicação sempre que desejar.'
    }
  ])

  const item15 = await ItemRepository.create({
    name: 'Prevenção de erros',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item15.data._id, [
    {
      title:
        'A aplicação deve prover mensagens de fácil compreensão para prevenir erros.'
    },
    {
      title: 'Confirmações devem ser necessárias para opções críticas.'
    }
  ])

  const item16 = await ItemRepository.create({
    name: 'Recuperação de erros',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item16.data._id, [
    {
      title:
        'Mensagens de erros devem usar uma terminologia e design consistente em toda a aplicação, bem como evitar palavras que de alguma forma insultem os usuários.'
    },
    {
      title:
        'Mensagens de erros devem sugerir a causa do problema que o causou.'
    },
    {
      title:
        'Mensagens de erros devem indicar qual ação o usuário deve realizar para corrigir um problema apresentado.'
    },
    {
      title:
        'Mensagens de erros que utilizem sons devem manter a consistência e vir acompanhadas da descrição do problema.'
    }
  ])

  const item17 = await ItemRepository.create({
    name: 'Ajuda/Help',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item17.data._id, [
    {
      title: 'Os elementos gráficos da aplicação devem ser explicados.'
    },
    {
      title:
        'As instruções de ajuda ao usuário devem preferencialmente ser oferecidas junto aos elementos da interface (botões, caixas de texto, etc.)'
    }
  ])

  const item18 = await ItemRepository.create({
    name: 'Internacionalização',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item18.data._id, [
    {
      title:
        'Elementos da interface, incluindo elementos de ajuda, devem ser oferecidos em diferentes línguas dependendo da configuração do computador ou opção do usuário.'
    }
  ])

  const item19 = await ItemRepository.create({
    name: 'Busca',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item19.data._id, [
    {
      title: 'A interface deve prover mecanismos de buscas.'
    }
  ])

  const item20 = await ItemRepository.create({
    name: 'Preferências de uso',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item20.data._id, [
    {
      title:
        'A aplicação deve sugerir programas ao usuário com base em suas preferências e histórico de opções selecionadas.'
    }
  ])

  const item21 = await ItemRepository.create({
    name: 'Atalhos',
    description: '',
    metrics: []
  })

  await ItemRepository.metricsCreateOrUpdate(item21.data._id, [
    {
      title:
        'Devem ser oferecidos atalhos aos usuários experientes para as tarefas prioritárias.'
    }
  ])
}
