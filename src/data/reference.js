const referenceData = [
  {
    id: 1,
    type: 'Book',
    slug: 'dynamic-self-organised-neural-network-inspired-by-the-immune-algorithm-for-financial-time-series-prediction-and-medical-data-classification',
    authors: ['Haya Alaskar'],
    title:
      'Dynamic Self-organised Neural Network Inspired by The Immune Algorithm for Financial Time Series Prediction and Medical Data Classification',
    publisher: 'Liverpool John Moores University',
    year: '2014',
    month: '04',
    keywords: [],
    media: {
      rcImage: '/img/reference/sBook.png',
      smallImage: '/img/reference/book.png',
      gridImage: '/img/reference/rBook.png',
      mediumImage: '/img/reference/mBook.png',
    },
  },
  {
    id: 2,
    type: 'Article',
    slug: 'deep-learning-of-emg-time–frequency-representations-for-identifying-normal-and-aggressive-actions',
    authors: ['Haya Alaskar'],
    title:
      'Deep Learning of EMG Time–Frequency Representations for Identifying Normal and Aggressive Actions',
    journal:
      'IJCSNS International Journal of Computer Science and Network Security',
    volume: '18',
    number: '12',
    pages: '16--25',
    year: '2018',
    doi: '',
    keywords: [
      {
        name: 'CNN',
        search: 'IEEE',
        text: 'Convolutional neural networks',
      },
      {
        name: 'AlexNet',
        search: 'IEEE',
        text: 'AlexNet',
      },
      {
        name: 'pre-trained',
        search: 'IEEE',
        text: 'pre-trained',
      },
      {
        name: 'Scalogram',
        search: 'IEEE',
        text: 'Scalogram',
      },
      {
        name: 'Spectrogram',
        search: 'IEEE',
        text: 'Spectrogram',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 3,
    type: 'Article',
    slug: 'classification-of-eeg-signals-using-wavelet-transform-and-hybrid-classifier-for-parkinsons-disease-detection',
    authors: ['M. P. G. Bhosale', 'S. T. Patil'],
    title:
      'Classification of EEG Signals Using Wavelet Transform and Hybrid Classifier for Parkinson’s Disease Detection',
    journal: 'Int. J. Eng',
    volume: '2',
    number: '1',
    pages: '',
    year: '2013',
    doi: '',
    keywords: [
      {
        name: 'Electroencephalograph (EEG)',
        search: 'IEEE',
        text: 'Electroencephalograph',
      },
      {
        name: 'Support Vector Machine (SVM)',
        search: 'IEEE',
        text: 'Support Vector Machine',
      },
      {
        name: 'Multilayerperceptron (MLP)',
        search: 'IEEE',
        text: 'Multilayerperceptron',
      },
      {
        name: 'Discrete Fourier Transform (DfT)',
        search: 'IEEE',
        text: 'Discrete Fourier Transform',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 4,
    type: 'Article',
    slug: 'a-committee-of-neural-network-for-traffic-sign-classification',
    authors: ['D. Ciresan', 'U. Meier', 'J. Masci', 'J. Schmidhuber'],
    title: 'A Committee of Neural Networks for Traffic Sign Classification',
    journal: 'in Proc. Int. Joint Conf. Neural Networks',
    volume: '',
    number: '',
    pages: '1918--1921',
    year: '2011',
    doi: '10.1109/ijcnn.2011.6033458',
    keywords: [],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 6,
    type: 'Conference',
    slug: 'evaluations-of-deep-convolutional-neural-networks-for-automatic-identification-of-malaria-infected-cells',
    authors: [
      'Yuhang Dong',
      'Zhuocheng Jiang',
      'Hongda Shen',
      'W. David Pan',
      'Lance A. Williams',
      'Vishnu V. B. Reddy',
      'William H. Benjamin',
      'Allen W. Bryan',
    ],
    title:
      'Evaluations of deep convolutional neural networks for automatic identification of malaria infected cells',
    booktitle:
      '2017 IEEE EMBS International Conference on Biomedical & Health Informatics (BHI)',
    series: '',
    pages: '101--104',
    year: '2011',
    publisher: 'IEEE',
    address: 'Orlando, FL, USA',
    keywords: [],
    media: {
      rcImage: '/img/reference/sConference.png',
      smallImage: '/img/reference/conference.png',
      gridImage: '/img/reference/rConference.png',
      mediumImage: '/img/reference/mConference.png',
    },
  },
  {
    id: 7,
    type: 'Article',
    slug: 'echo-state-networks-for-modeling-and-classification-of-eeg-signals-in-mental-task-braincomputer-interfaces',
    authors: [
      'Elliott M. Forney',
      'Charles W. Anderson',
      'William J. Gavin',
      'Patricia L. Davies',
      'Marla C. Roll',
      'Brittany K. Taylo',
    ],
    title:
      'Echo State Networks for Modeling and Classification of EEG Signals in Mental-Task Brain-Computer Interfaces',
    journal: 'Colorado State University Technical Report CS-15-102',
    volume: '',
    number: '',
    pages: '',
    year: '2015',
    doi: '',
    keywords: [],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 8,
    type: 'Article',
    slug: 'improved-wavelet-denoising-via-empirical-wiener-filtering',
    authors: ['Sandeep P. Ghael', 'Akbar M. Sayeed', 'Richard G. Baraniuk'],
    title: 'Improved Wavelet Denoising via Empirical Wiener Filtering',
    journal: 'in Proc. of SPIE, San Diego',
    volume: '',
    number: '',
    pages: '389--399',
    year: '1997',
    doi: '10.1117/12.292799',
    keywords: [
      {
        name: 'Wavelets',
        search: 'IEEE',
        text: 'Wavelets',
      },
      {
        name: 'denoising',
        search: 'IEEE',
        text: 'denoising',
      },
      {
        name: 'estimation',
        search: 'IEEE',
        text: 'estimation',
      },
      {
        name: 'Wiener flter',
        search: 'IEEE',
        text: 'Wiener flter',
      },
      {
        name: 'subspace',
        search: 'IEEE',
        text: 'subspace',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 9,
    type: 'Book',
    slug: 'deep-learning',
    authors: ['Ian Goodfellow', 'Yoshua Bengio', 'Aaron Courville'],
    title: 'Deep Learning',
    publisher: 'MIT Press',
    year: '2016',
    month: '',
    keywords: [],
    media: {
      rcImage: '/img/reference/sBook.png',
      smallImage: '/img/reference/book.png',
      gridImage: '/img/reference/rBook.png',
      mediumImage: '/img/reference/mBook.png',
    },
  },
  {
    id: 10,
    type: 'Article',
    slug: 'automatic-diagnosis-of-mild-cognitive-impairment-using-electroencephalogram-spectral-features',
    authors: ['Masoud Kashefpoor', 'Hossein Rabbani', 'Majid Barekatain'],
    title:
      'Automatic Diagnosis of Mild Cognitive Impairment Using Electroencephalogram Spectral Features',
    journal: 'Journal of Medical Sensors and Signals',
    volume: '6',
    number: '',
    pages: '25--32',
    year: '2016',
    doi: '10.4103/2228-7477.175869',
    keywords: [
      {
        name: 'Early Alzheimer’s disease',
        search: 'IEEE',
        text: 'Early Alzheimer’s disease',
      },
      {
        name: 'electroencephalogram spectral features',
        search: 'IEEE',
        text: 'electroencephalogram spectral features',
      },
      {
        name: 'k‑nearest neighbor',
        search: 'IEEE',
        text: 'k‑nearest neighbor',
      },
      {
        name: 'mild cognitive impairment',
        search: 'IEEE',
        text: 'mild cognitive impairment',
      },
      {
        name: 'neurofuzzy',
        search: 'IEEE',
        text: 'neurofuzzy',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 11,
    type: 'Conference',
    slug: 'a-review-on-analysis-of-eeg-signals',
    authors: ['Er. Jasjeet Kaur', 'Er. Amanpreet Kaur'],
    title: 'A Review on Analysis of EEG Signals',
    booktitle:
      '2015 International Conference on Advances in Computer Engineering and Applications',
    series: '',
    pages: '25--32',
    year: '2015',
    publisher: 'IEEE',
    address: 'Ghaziabad, India',
    keywords: [
      {
        name: 'EEG signals',
        search: 'IEEE',
        text: 'EEG signals',
      },
      {
        name: 'analysis',
        search: 'IEEE',
        text: 'analysis',
      },
      {
        name: 'methods',
        search: 'IEEE',
        text: 'methods',
      },
    ],
    media: {
      rcImage: '/img/reference/sConference.png',
      smallImage: '/img/reference/conference.png',
      gridImage: '/img/reference/rConference.png',
      mediumImage: '/img/reference/mConference.png',
    },
  },
  {
    id: 12,
    type: 'Conference',
    slug: 'imagenet-classification-with-deep-convolutional-neural-networks',
    authors: ['Alex Krizhevsky', 'Ilya Sutskever', 'Geoffrey E. Hinton'],
    title: 'ImageNet Classification with Deep Convolutional Neural Networks',
    booktitle: 'Advances in Neural Information Processing Systems 25',
    series: '',
    pages: '1097--1105',
    year: '2012',
    publisher: 'Curran Associates, Inc.',
    address: '57 Morehouse Lane Red Hook, NY, United States',
    keywords: [],
    media: {
      rcImage: '/img/reference/sConference.png',
      smallImage: '/img/reference/conference.png',
      gridImage: '/img/reference/rConference.png',
      mediumImage: '/img/reference/mConference.png',
    },
  },
  {
    id: 13,
    type: 'Article',
    slug: 'gradient‑based-learning-applied-to-document-recognition',
    authors: ['Yann LeCun', 'Léon Bottou', 'Yoshua Bengio', 'Patrick Haffner'],
    title: 'Gradient‑Based Learning Applied to Document Recognition',
    journal: 'Proceedings of the IEEE',
    volume: '86',
    number: '',
    pages: '22781--2324',
    year: '1998',
    doi: '10.1109/5.726791',
    keywords: [
      {
        name: 'Neural Networks',
        search: 'IEEE',
        text: 'Neural Networks',
      },
      {
        name: 'OCR',
        search: 'IEEE',
        text: 'OCR',
      },
      {
        name: 'Document Recognition',
        search: 'IEEE',
        text: 'Document Recognition',
      },
      {
        name: 'Machine Learning',
        search: 'IEEE',
        text: 'Machine Learning',
      },
      {
        name: 'Gradient‑Based Learning',
        search: 'IEEE',
        text: 'Gradient‑Based Learning',
      },
      {
        name: 'Convolutional Neural Networks',
        search: 'IEEE',
        text: 'Convolutional Neural Networks',
      },
      {
        name: 'Graph Transformer Networks',
        search: 'IEEE',
        text: 'Graph Transformer Networks',
      },
      {
        name: 'Finite State Transducers',
        search: 'IEEE',
        text: 'Finite State Transducers',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 14,
    type: 'Article',
    slug: 'handwritten-digit-recognition',
    authors: [
      'Y. Le Cun',
      'I. Guyon',
      'L. D. Jackel',
      'D.Henderson',
      'B. Boser',
      'R. E. Howard',
      'J . S. Denker',
      'W. Hubbard',
      'H. P.Graf',
    ],
    title:
      'Handwritten Digit Recognition: Applications of Neural Network Chips and Automatic Learning',
    journal: 'IEEE Communications Magazine',
    volume: '27',
    number: '',
    pages: '41--46',
    year: '1989',
    doi: '10.1109/35.41400',
    keywords: [],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 15,
    type: 'Article',
    slug: 'clinical-application-of-an-eeg-based-brain–computer-interface',
    authors: [
      'C. Neuper',
      'G.R. Mu¨ller',
      'A. Ku¨bler',
      'N. Birbaumer',
      'G. Pfurtscheller',
    ],
    title:
      'Clinical application of an EEG-based brain–computer interface: a case study in a patient with severe motor impairment',
    journal: 'Clinical Neurophysiology',
    volume: '114',
    number: '3',
    pages: '399--409',
    year: '2003',
    doi: '10.1016/S1388-2457(02)00387-5',
    keywords: [],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 16,
    type: 'Conference',
    slug: 'effect-of-parameter-variations-on-accuracy-of-convolutional-neural-network',
    authors: ['Kaushik Gobindram Pasi', 'Sowmiyaraksha R. Naik'],
    title:
      'Effect of Parameter Variations on Accuracy of Convolutional Neural Network',
    booktitle:
      '2016 International Conference on Computing, Analytics and Security Trends (CAST)',
    series: '',
    pages: '398--403',
    year: '2016',
    publisher: 'IEEE',
    address: 'Pune, India',
    keywords: [
      {
        name: 'CNN',
        search: 'IEEE',
        text: 'Convolutional Neural Networ',
      },
      {
        name: 'Natural Language Processing',
        search: 'IEEE',
        text: 'Natural Language Processing',
      },
      {
        name: 'Deep Learning',
        search: 'IEEE',
        text: 'Deep Learning',
      },
      {
        name: 'Sentence Classification',
        search: 'IEEE',
        text: 'Sentence Classification',
      },
      {
        name: 'Character Embedding',
        search: 'IEEE',
        text: 'Character Embedding',
      },
      {
        name: 'Feature Map',
        search: 'IEEE',
        text: 'Feature Map',
      },
      {
        name: 'Pooling',
        search: 'IEEE',
        text: 'Pooling',
      },
      {
        name: 'Regularization',
        search: 'IEEE',
        text: 'Regularization',
      },
      {
        name: 'Learning Rate',
        search: 'IEEE',
        text: 'Learning Rate',
      },
    ],
    media: {
      rcImage: '/img/reference/sConference.png',
      smallImage: '/img/reference/conference.png',
      gridImage: '/img/reference/rConference.png',
      mediumImage: '/img/reference/mConference.png',
    },
  },
  {
    id: 17,
    type: 'Article',
    slug: 'analyzing-eeg-signals-with-machine-learning-for-diagnosing-alzheimers-disease',
    authors: ['V. Podgorelec'],
    title:
      'Analyzing EEG Signals with Machine Learning for Diagnosing Alzheimer’s Disease',
    journal: 'Elektronika ir elektrotechnika',
    volume: '8',
    number: '18',
    pages: '61--64',
    year: '2012',
    doi: '10.5755/j01.eee.18.8.2627',
    keywords: [
      {
        name: 'Alzheimer’s disease',
        search: 'IEEE',
        text: 'Alzheimer’s disease',
      },
      {
        name: 'computer aided diagnosis',
        search: 'IEEE',
        text: 'computer aided diagnosis',
      },
      {
        name: 'EEG',
        search: 'IEEE',
        text: 'electroencephalography',
      },
      {
        name: 'machine learning',
        search: 'IEEE',
        text: 'machine learning',
      },
      {
        name: 'medical diagnosis',
        search: 'IEEE',
        text: 'medical diagnosis',
      },
      {
        name: 'signal analysis',
        search: 'IEEE',
        text: 'signal analysis',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 18,
    type: 'Conference',
    slug: 'deep-learning-with-convolutional-neural-networks-for-eeg-decoding-and-visualization',
    authors: [
      'Robin Tibor Schirrmeister',
      'Jost Tobias Springenberg',
      'Lukas Dominique Josef Fiederer',
      'Martin Glasstetter',
      'Katharina Eggensperger',
      'Michael Tangermann',
      'Frank Hutter',
      'Wolfram Burgard',
      'Tonio Ball',
    ],
    title:
      'Deep Learning With Convolutional Neural Networks for EEG Decoding and Visualization',
    booktitle:
      '2017 IEEE Signal Processing in Medicine and Biology Symposium (SPMB)',
    series: '',
    pages: '1097--1105',
    year: '2017',
    publisher: 'IEEE',
    address: 'Philadelphia, PA, USA',
    keywords: [
      {
        name: 'EEG',
        search: 'IEEE',
        text: 'electroencephalography',
      },
      {
        name: 'EEG analysis',
        search: 'IEEE',
        text: 'EEG analysis',
      },
      {
        name: 'machine learning',
        search: 'IEEE',
        text: 'machine learning',
      },
      {
        name: 'end-to-end learning',
        search: 'IEEE',
        text: 'end-to-end learning',
      },
      {
        name: 'brain–machine interface',
        search: 'IEEE',
        text: 'brain–machine interface',
      },
      {
        name: 'brain–computer interface',
        search: 'IEEE',
        text: 'brain–computer interface',
      },
      {
        name: 'model interpretability',
        search: 'IEEE',
        text: 'model interpretability',
      },
      {
        name: 'brain mapping',
        search: 'IEEE',
        text: 'brain mapping',
      },
    ],
    media: {
      rcImage: '/img/reference/sConference.png',
      smallImage: '/img/reference/conference.png',
      gridImage: '/img/reference/rConference.png',
      mediumImage: '/img/reference/mConference.png',
    },
  },
  {
    id: 19,
    type: 'Article',
    slug: 'deep-learning-enabled-fault-diagnosis-using-time-frequency-image-analysis-of-rolling-element-bearings',
    authors: [
      'David Verstraete',
      'Andrés Ferrada',
      'Enrique López Droguett',
      'Viviana Meruane',
      'Mohammad Modarres',
    ],
    title:
      'Deep Learning Enabled Fault Diagnosis Using Time-Frequency Image Analysis of Rolling Element Bearings',
    journal: 'Shock Vib',
    volume: '2017',
    number: '',
    pages: '',
    year: '2017',
    doi: '10.1155/2017/5067651',
    keywords: [],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 20,
    type: 'Conference',
    slug: 'deep-convolutional-neural-networks-for-interpretable-analysis-of-eeg-sleep-stage-scoring',
    authors: ['Albert Vilamala', 'Kristoffer H. Madsen', 'Lars K. Hansen'],
    title:
      'Deep Convolutional Neural Networks for Interpretable Analysis of EEG Sleep Stage Scoring',
    booktitle:
      '2017 IEEE International Workshop On Machine Learning For Signal Processing',
    series: '',
    pages: '25--28',
    year: '2017',
    publisher: 'IEEE',
    address: 'Tokyo, Japan',
    keywords: [
      {
        name: 'CNN',
        search: 'IEEE',
        text: 'Convolutional Neural Networks',
      },
      {
        name: 'Transfer Learning',
        search: 'IEEE',
        text: 'Transfer Learning',
      },
      {
        name: 'Sleep Stage Scoring',
        search: 'IEEE',
        text: 'Sleep Stage Scoring',
      },
      {
        name: 'Multitaper Spectral Analysis',
        search: 'IEEE',
        text: 'Multitaper Spectral Analysis',
      },
    ],
    media: {
      rcImage: '/img/reference/sConference.png',
      smallImage: '/img/reference/conference.png',
      gridImage: '/img/reference/rConference.png',
      mediumImage: '/img/reference/mConference.png',
    },
  },
  {
    id: 21,
    type: 'Article',
    slug: 'automatic-classification-of-motor-impairment-neural-disorders-from-eeg-signals-using-deep-convolutional-neural-networks',
    authors: ['Grega Vrbancic', 'Vili Podgorelec'],
    title:
      'Automatic Classification of Motor Impairment Neural Disorders from EEG Signals Using Deep Convolutional Neural Networks',
    journal: 'Elektron. Ir Elektrotechnika',
    volume: '24',
    number: '4',
    pages: '3--7',
    year: '2018',
    doi: '10.5755/j01.eie.24.4.21469',
    keywords: [
      {
        name: 'Artificial neural networks',
        search: 'IEEE',
        text: 'Artificial neural networks',
      },
      {
        name: 'Biomedical signal processing',
        search: 'IEEE',
        text: 'Biomedical signal processing',
      },
      {
        name: 'Electroencephalography',
        search: 'IEEE',
        text: 'Electroencephalography',
      },
      {
        name: 'Image classification',
        search: 'IEEE',
        text: 'Image classification',
      },
      {
        name: 'Machine learning',
        search: 'IEEE',
        text: 'Machine learning',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
  {
    id: 22,
    type: 'Article',
    slug: 'emg‑based-estimation-of-limb-movement-using-deep-learning-with-recurrent-convolutional-neural-networks',
    authors: ['Peng Xia', 'Jie Hu', 'Yinghong Peng'],
    title:
      'EMG‑Based Estimation of Limb Movement Using Deep Learning With Recurrent Convolutional Neural Networks',
    journal: 'Artif. Organs',
    volume: '42',
    number: '5',
    pages: 'E67--E77',
    year: '2017',
    doi: '10.1111/aor.13004',
    keywords: [
      {
        name: 'Electromyogram',
        search: 'IEEE',
        text: 'Electromyogram',
      },
      {
        name: 'Myoelectric control',
        search: 'IEEE',
        text: 'Myoelectric control',
      },
      {
        name: 'Deep learning',
        search: 'IEEE',
        text: 'Deep learning',
      },
      {
        name: 'Convolutional neural network',
        search: 'IEEE',
        text: 'Convolutional neural network',
      },
      {
        name: 'Recurrent neural network',
        search: 'IEEE',
        text: 'Recurrent neural network',
      },
    ],
    media: {
      rcImage: '/img/reference/sArticle.png',
      smallImage: '/img/reference/article.png',
      gridImage: '/img/reference/rArticle.png',
      mediumImage: '/img/reference/mArticle.png',
    },
  },
]

export default referenceData
