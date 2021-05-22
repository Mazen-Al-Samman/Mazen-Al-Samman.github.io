let uni_data = [
{
    'name': 'الجامعة الأردنية',
    'img': 'ju.png',
    'clicked': 'ju',
    'collage': 'ahmad',
},
{
    'name': 'الجامعة الهاشمية',
    'img': 'hu.png',
    'clicked': 'hu',
},
{
    'name': 'جامعة مؤتة',
    'img': 'mu.png',
    'clicked': 'mu',
},
{
    'name': 'جامعة العلوم والتكنولوجيا',
    'img': 'just.png',
    'clicked': 'just',
},
{
    'name': 'الجامعة الألمانية الأردنية',
    'img': 'gju.png',
    'clicked': 'gju',
},{
    'name': 'جامعة ال البيت',
    'img': 'ab.png',
    'clicked': 'ab',
},{
    'name': 'جامعة اليرموك',
    'img': 'yu.png',
    'clicked': 'yu',
},
{
    'name': 'الجامعة الطفيلة التقنية',
    'img': 'tt.png',
    'clicked': 'tt',
},
];
let collages = new Map();
collages.set('ju',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'it',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]);
collages.set('hu',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'it',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]);
collages.set('ab',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'it',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]
);
collages.set('gju',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'it',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]);
collages.set('just',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'it',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]);
collages.set('mu',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'it',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]);
collages.set('tt',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'ph',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]);
collages.set('yu',
[
    {
        'name': 'علوم',
        'click': 'science',
        'majors': [
            {
                'name': 'الفيزياء',
                'price': '20'
            },
            {
                'name': 'رياضيات',
                'price': '30'
            }
        ]
    },
    {
        'name': 'تكنولوجيا المعلومات',
        'click': 'it',
        'majors': [
            {
                'name': 'علم الحاسوب',
                'price': '75'
            },
            {
                'name': 'هندسة البرمجيات',
                'price': '80'
            },
            {
                'name': 'الذكاء الإصطناعي',
                'price': '20'
            }
        ]
    },
    {
        'name': 'الصيدلة',
        'click': 'ph',
        'majors': [
            {
                'name': 'الصيدلة',
                'price': '110'
            }
        ]
    },
    {
        'name': 'الإقتصاد',
        'click': 'financial',
        'majors': [
            {
                'name': 'المحاسبة',
                'price': '20'
            },
            {
                'name': 'إدارة أعمال',
                'price': '45'
            }
        ]
    },
    {
        'name': 'الصحافة والإعلام',
        'click': 'tv',
        'majors': [
            {
                'name': 'صحافة وإعلام',
                'price': '20'
            },
            {
                'name': 'إذاعة وتلفزيون',
                'price': '30'
            }
        ]
    }
]);
