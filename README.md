A progress bar which displays a row of icons representing the stage of a progress.

The icons are shown in 3 colours for complete, active and incomplet.

The list of icons is configured via a list which is supplied as the data source.

The current progress is passed in the state.

## Setup

- Grab the files from the /dist folder and import into your tenant.

- Define a type called ProgressIcon and give it these attributes: -

key - String - The key for this an icon.  This will correspond to the state field value
label - String - The value used for the tool tip when hovering over
name - String - A unique name to describe the stage represented by this item - not used but for your own reference;
value - String - The name of a bootstrap glyph icon to display.  The name minus the common "glyphicon-" part so e.g. "envelope" for "glyphicon-envelope".

- Create a Value of type List of ProgressIcon types. 

- Add your icons.  The order in the list controls the order they are displayed.

- Add a component to your page, any type, save it then change it's "componentType" to "IconProgressBar" in the metadata editor and save it.
e.g. 
            "attributes": null,
            "columns": null,
            "componentType": "IconProgressBar",
            "content": "",

- Now set the component's "Data Source" to the list of ProgressIcon you created and set it's "State" to a field containing the current processes state which matches one of the icon's "key" field values.



## Extra Configuration

-You can add attributes to the component to control it's appearance: -

CompleteColour  - String - A standard colour name or a #rrggbb colour definition - default is #3797ff
ActiveColour  - String - A standard colour name or a #rrggbb colour definition - default is black
IncompleteColour  - String - A standard colour name or a #rrggbb colour definition - default is #bbbbbb
IconSize    - Number - the font point size for the icons - default is "16" (16pt)
