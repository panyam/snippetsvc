
# SnipCode - Let your code tell a story

SnipCode is a way to insert code snippets in page for advanced (and interactive) documentation.  Unlike normal code snippets, SnipCode plugin allows you to also show the executed output (or errors) of the code being shown.   With SnipCode you can also "continue" an execution over multiple blocks to tell a story!

# Usage

## Basic Usage

```
<SnipCode {...options} code={'
  Your code snippet goes here
'}/>
```

On the page this would render 2 blocks - one for the code snippet and one for the executed output.

Some of the options are:

* id - Required - Every snippet needs an ID that is unique within the page.
* lang - Language used by the code snippet.  Defaults to "ts" for typescript.  More languages coming soon.
* env - ID of the environment being used to run the snippet (more on this later).
* hidden: boolean - Flag to suppress displaying the code snippet.  This is useful for when the snippet contents are needed for successive snippets but the code itself does not need to be shown.  This is great for hiding boilerplate code (like installing dependencies etc).
: silent: boolean   - Suppress display of output right after this block.  This can be set to true if output location is to be manually set (see next section).
* prev: string - ID of the previous block that must be executed (to build up context) instead of having to manually duplicate code all over the place.  This is what enables sequential flow of stories.

## Controlling output location

By default the output block is generated right SnipCode block.  A specific output block for a given SnipCode can be manually placed using the SnipOut block:

```
<SnipOut id=<snipCodeId> />
```

Here the snipCodeId is the ID of the SnipCode block whose output is to be rendered.

## Continuations

In some story-telling scenarious in documentaion it is desirable to layout code incrementally and show their outputs also incrementally.  ie in steps.  To do this we want to link blocks by:

```
<SnipCode id = "step1" code = {'
  console.log("Hello world.  This is step 1");
'} />
```

Resulting in the output block:

```
Hello world.  This is step 1
```

If the next step is to be documented via:

```
<SnipCode id = "step2" prev = "step1" code = {'
  console.log("Hello again world.  This is step 2");
'} />
```

then though the code would reuse the previous steps the output block would only contain:

```
Hello again world.  This is step 2
```
