Ext.define('Aider.view.Main', {
    extend:'Ext.tab.Panel',
    xtype:'main',

    config:{
        tabBarPosition:'bottom',
        scrollable:true,
        items:[
        {
            xtype:'emergency',
            iconCls:'user',
            title:'Emergency'
        },
        {
            xtype:'utility',
            iconCls:'star',
            title:'Utility'
        },
        {
            xtype:'primary',
            iconCls:'action',
            title:'Primary'
        },
        {
            xtype:'fitness',
            iconCls:'heart',
            title:'Fitness'
        },
        {
            xtype:'entertainment',
            iconCls:'arrow_right',
            title:'Entertainment'
        },
        /*{
            xtype:'about',
            iconCls:'info',
            title:'About'
        }*/
        ]
    }
});
