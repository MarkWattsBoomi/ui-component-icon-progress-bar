A progress bar which displays a row of icons representing the stage of a progress.

The icons are shown in 3 colours for complete, active and incomplet.

The list of icons is configured via a list which is supplied as the data source.

The current progress is passed in the state.

## Setup

- Grab the files from the /dist folder and import into your tenant.

- Add the files to your player code like this: -
        requires: ['core', 'bootstrap3'],
        customResources: [
                    'https://s3.amazonaws.com/files-manywho-com/<tenant-id>/IconProgressBar.css',
                    'https://s3.amazonaws.com/files-manywho-com/<tenant-id>/IconProgressBar.js'
                    ],


- Define a type called ProgressIcon and give it these attributes: -

    key - String - The key for this an icon.  This will correspond to the state field value
    label - String - The value used for the tool tip when hovering over
    name - String - A unique name to describe the stage represented by this item - not used but for your own reference;
    value - String - The name of a bootstrap glyph icon to display.  The name minus the common "glyphicon-" part so e.g. "envelope" for "glyphicon-envelope".

- Create a Value of type List of ProgressIcon types e.g. "ProgressIcons". 

- Add your icons.  The order in the list controls the order they are displayed e.g.
        
        key | label | name | value
        ==========================
        1   | Step 1 | First Step | envelope
        2   | Step 2 | Second Step | wrench

- Add a component to your page, any type, save it then change it's "componentType" to "IconProgressBar" in the metadata editor and save it.
e.g. 
            "componentType": "IconProgressBar",

- Add a String value to hold your flow's current progress e.g. "CurrentProgress".

- Set the component's "Data Source" to the list of ProgressIcon you created (e.g. ProgressIcons").

- Set the component's "State" to a the containing the current processes state (e.g. CurrentProgress). 

- In your flow you can then set the field containing the key to the appropriate value using an "Operator" or a macro.


##### Note: the value in the state must match one of the keys in the list.





## Extra Configuration

You can add attributes to the component to control it's appearance: -

- CompleteColour  - String - A standard colour name or a #rrggbb colour definition - default is #3797ff
- ActiveColour  - String - A standard colour name or a #rrggbb colour definition - default is black
- IncompleteColour  - String - A standard colour name or a #rrggbb colour definition - default is #bbbbbb
- IconSize    - Number - the font point size for the icons - default is "16" (16pt)

