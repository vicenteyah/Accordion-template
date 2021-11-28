new Vue({
    el: '#root',
    data: {
        props: {
            mainTitle: 'Frequently Asked Questions',
            secondTitle: 'Skills',
        },
        children:[ 
            {
                id: 1,
                description:'Do you provide any scripts with your templates?',
                paragraph:`
                    Our templates do not include any additional scripts. Newsletter subscriptions,
                    search fields, forums, image galleries (in HTML versions of Flash products) are inactive. 
                    Basic scripts can be easily added at www.zemez.io If you are not sure that the element 
                    you’re interested in is active please contact our Support Chat for clarification.
                `
            },
            {
                id: 2,
                description:'What do I receive when I order a template?',
                paragraph:`
                    After you complete the payment via our secure form 
                    you will receive the instructions for downloading the product. 
                    The source files in the download package can vary based 
                    on the type of the product you have purchased.
                `
            },
            {
                id: 3,
                description:'In what formats are your templates available?',
                paragraph:`
                    Website templates are available in Photoshop and HTML formats. 
                    Fonts are included with the Photoshop file. In most templates, 
                    HTML is compatible with Adobe® Dreamweaver® and Microsoft® FrontPage®.   
                `,
            },
            {
                id: 4,
                description:'What am I allowed to do with the templates?',
                paragraph:`
                    You may build a website using the template in any way you like. 
                    You may not resell or redistribute templates (like we do); 
                    claim intellectual or exclusive ownership to any of our products, 
                    modified or unmodified. All products are property of content providing companies and individuals.
                `
            }
        ],
        
        skills: [
            {
                id: 1,
                title: 'Branding',
                value:'90',
                width: '90%',
                color: '#2838EF'
            },
            {
                id: 2,
                title: 'Web Design',
                value:'65',
                width: '65%',
                color: '#E6C61B'
            },
            {
                id: 3,
                title: 'Copywriting',
                value:'100',
                width: '100%',
                color: '#ED4884'
            },
            {
                id: 4,
                title: 'Video Production',
                value:'75',
                width: '75%',
                color: '#3CC985'
            }
        ]
    }
})