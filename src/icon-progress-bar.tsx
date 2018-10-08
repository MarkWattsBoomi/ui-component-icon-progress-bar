
declare var manywho: any;

import * as React from 'react';
import './icon-progress-bar.css';

class IconProgressBar extends React.Component<any, any> 
{   
    componentId: string = "";
    flowKey: string ="";    
    attributes : any = {};
    selectedItem: string = null;

    text : string = "";

    constructor(props : any)
	{
        super(props);
        
        this.componentId = props.id;
        this.flowKey = props.flowKey;

        //push attributes into keyed map 
		var flowModel = manywho.model.getComponent(this.props.id,   this.props.flowKey);
		if(flowModel.attributes)
		{
			for(var key in flowModel.attributes)
			{
				this.attributes[key] = flowModel.attributes[key];
			}
        }
    }

    
    componentDidMount() 
    {
        var flowModel = manywho.model.getComponent(this.props.id,   this.props.flowKey);
        const flowState = manywho.state.getComponent(this.props.id,   this.props.flowKey);
        var status = flowModel.contentValue?parseInt(flowModel.contentValue):1;
        flowState.contentValue = status;

        this.forceUpdate();
    }

    componentDidUpdate()
    {

    }

	getAttribute(attributeName : string)
	{
		if(this.attributes[attributeName])
		{
			return this.attributes[attributeName];
		}
		else
		{
			return null;
		}
    }
    
    sortByKey(array : any, key : string) 
    {
        return array.sort(function(a : any, b : any) 
        {
            var x = a[key]; 
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

	render()
	{
	   
		const flowModel = manywho.model.getComponent(this.props.id,   this.props.flowKey);
        const flowState = manywho.state.getComponent(this.props.id,   this.props.flowKey);
        var status = flowModel.contentValue?parseInt(flowModel.contentValue):1;

        if(flowState.loading)
        {
            return <div className="icon-progress-bar col-sm-6"> </div>;
        }

        //load the icon array
        var data = [];

        if(flowModel.objectData && flowModel.objectData.length > 0)
        {
            for (var pos = 0 ; pos < flowModel.objectData.length ; pos++)
            {
                var i = flowModel.objectData[pos];
                var icon : any = {};
                icon.key = manywho.utils.getObjectDataProperty(i.properties,"key").contentValue;
                icon.label = manywho.utils.getObjectDataProperty(i.properties,"label").contentValue;
                icon.name = manywho.utils.getObjectDataProperty(i.properties,"name").contentValue;
                icon.value = manywho.utils.getObjectDataProperty(i.properties,"value").contentValue;
                data.push(icon);
            }
        }

        data = this.sortByKey(data,"key");

        var icons = [];
        var cls = "";

        for (var dPos = 0 ; dPos < data.length ; dPos++)
        {
            var d = data[dPos];
            cls = "glyphicon glyphicon-" + d.value + " icon-progress-bar-icon ";

            var style : any = {};

            if(this.getAttribute("IconSize"))
            {
                style["font-size"] = this.getAttribute("IconSize") + "pt";
            }


            if(parseInt(d.key)<status)
            {
                if(this.getAttribute("CompleteColour"))
                {
                    style.color = this.getAttribute("CompleteColour");
                }
                else
                {
                    cls += " icon-progress-bar-icon-complete";
                }
            }
            else if(parseInt(d.key)===status)
            {
                if(this.getAttribute("ActiveColour"))
                {
                    style.color = this.getAttribute("ActiveColour");
                }
                else
                {
                    cls += " icon-progress-bar-icon-active";
                }
                
            }
            else
            {
                if(this.getAttribute("IncompleteColour"))
                {
                    style.color = this.getAttribute("IncompleteColour");
                }
                else
                {
                    cls += " icon-progress-bar-icon-incomplete";
                }
                
            }
            var span = <span className={cls} style={style}></span>;
            icons.push(span);
        }

        

        var width = flowModel.width;
        var height = flowModel.height;

        //var controlStyle = {"width" : width };

        return <div className="icon-progress-bar col-sm-6">
                    <div className="icon-progress-bar-inner">
                        {icons}
                    </div>
               </div>;

    }
}

manywho.component.register('IconProgressBar', IconProgressBar);

export default IconProgressBar;