<h1>Content</h1>

* TOC
{:toc}


├── ==_config.yml==
├── ==_data==
│   └── members.yml
├── ==_drafts==
│   ├── begin-with-the-crazy-ideas.md
│   └── on-simplicity-in-technology.md
├── ==_includes==
│   ├── footer.html
│   └── header.html
├── ==_layouts==
│   ├── default.html
│   └── post.html
├── ==_posts==
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
│   └── 2009-04-26-barcamp-boston-4-roundup.md
├── ==_sass==
│   ├── _base.scss
│   └── _layout.scss
├── ==_site==
├── .jekyll-cache
│   └── Jekyll
│       └── Cache
│           └── [...]
├── ==.jekyll-metadata==
└── ==index.html== # can also be an 'index.md' with valid front matter



# _drafts





# _includes

These are the partials that can be mixed and matched by your layouts and posts to facilitate reuse. The liquid tag `{% include file.ext %}` can be used to include the partial in `_includes/file.ext`.





# _layouts

These are the templates that wrap posts. Layouts are chosen on a post-by-post basis in the [front matter](https://jekyllrb.com/docs/front-matter/), which is described in the next section. The liquid tag `{{ content }}` is used to inject content into the web page.



# _posts

Your dynamic content, so to speak. The naming convention of these files is important, and **must** follow the format: `YEAR-MONTH-DAY-title.MARKUP`. The [permalinks](https://jekyllrb.com/docs/permalinks/) can be customized for each post, but the date and markup language are determined solely by the file name.



# _data

Well-formatted **site data** should be placed here. The Jekyll engine will **autoload all data files** (using either the `.yml`, `.yaml`, `.json`, `.csv` or `.tsv` formats and extensions) in this directory, and they will be **accessible vi**a `site.data`. If there's a file `members.yml` under the directory, then you can access contents of the file through `site.data.members`.





# _sass

These are sass partials that can be imported into your `main.scss` which will then be processed into a single stylesheet `main.css` that defines the styles to be used by your site. Learn [how to work with assets](https://jekyllrb.com/docs/assets/).



# _index.html

Provided that the file has a **[front matter](https://jekyllrb.com/docs/front-matter/) section**, it will be transformed by Jekyll. The same will happen for any `.html`, `.markdown`, `.md`, or `.textile` file in your site’s root directory or directories not listed above.

## Fromt Matter





# Other Files/Folders

Except for the special cases listed above, every other directory and file—such as `css` and `images` folders, `favicon.ico` files, and so forth—will be copied verbatim to the generated site. There are plenty of [sites already using Jekyll](https://jekyllrb.com/showcase/) if you’re curious to see how they’re laid out.



# Note

Every file or directory beginning with the following characters: `.`, `_ `, `#` or `~` in the `source` directory will not be included in the `destination` folder. Such paths will have to be explicitly specified via the config file in the `include` directive to make sure they’re copied over:

```
include:
 - _pages
 - .htaccess
```



# Posts

Blogging is baked into Jekyll. You write blog posts as text files and Jekyll provides everything you need to turn it into a blog.

## The Posts Folder

The `_posts` folder is where your blog posts live. You typically write posts in [Markdown](https://daringfireball.net/projects/markdown/), HTML is also supported.



## Creating Posts

To create a post, add a file to your `_posts` directory with the following format:

```
YEAR-MONTH-DAY-title.MARKUP
```

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. For example, the following are examples of valid post filenames:

```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.md
```

All blog post files must begin with [front matter](https://jekyllrb.com/docs/front-matter/) which is typically used to set a [layout](https://jekyllrb.com/docs/layouts/) or other meta data. For a simple example this can just be empty:

```
---
layout: post
title:  "Welcome to Jekyll!"
---



# Welcome

**Hello world**, this is my first Jekyll blog post.

I hope you like it!
```



**Look here!**

Use the [`post_url`](https://jekyllrb.com/docs/liquid/tags/#linking-to-posts) tag to link to other posts without having to worry about the URLs breaking when the site permalink style changes.




## Including images and resources[locally]

At some point, you’ll want to include images, downloads, or other digital assets along with your text content. One common solution is to create a folder in the root of the project directory called something like `assets`, into which any images, files or other resources are placed. Then, from within any post, they can be linked to using the **site’s root as the path for the asset to include**. The best way to do this depends on the way your site’s (sub)domain and path are configured, but here are some simple examples in Markdown:

Including an image asset in a post:

Including an image asset in a post:

```
... which is shown in the screenshot below:
![My helpful screenshot](/assets/screenshot.jpg)
```

Linking to a PDF for readers to download:

```
... you can [get the PDF](/assets/mydoc.pdf) directly.
```



## Displaying an index of posts[Create a list of links of your blog posts]

Creating an index of posts on another page should be easy thanks to [Liquid](https://docs.shopify.com/themes/liquid/basics) and its tags. Here’s a simple example of how to create a list of links to your blog posts:

```html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

```

You have full control over how (and where) you display your posts, and how you structure your site. You should read more about [how templates work](https://jekyllrb.com/docs/templates/) with Jekyll if you want to know more.

Note that the `post` variable only exists inside the `for` loop above. If you wish to access the **currently-rendering** page/posts’s variables (the variables of the post/page that has the `for` loop in it), **use the `page` variable instead.**



## Tags and Categoris

Jekyll has **first class support** for *tags* and *categories* in blog posts.

### Tags

Tags for a post are defined in the post’s front matter using either the key `tag` for a single entry or `tags` for multiple entries.
Since Jekyll expects multiple items mapped to the key `tags`, it will automatically *split* a string entry if it contains whitespace. For example, while front matter `tag: classic hollywood` will be processed into a singular entity `"classic hollywood"`, front matter `tags: classic hollywood` will be processed into an array of entries `["classic", "hollywood"]`.

Irrespective of the front matter key chosen, Jekyll stores the metadata mapped to the plural key which is exposed to **Liquid templates**.

All tags registered in the current site are exposed to Liquid templates via `site.tags`. Iterating over `site.tags` on a page will yield another array with two items, where the first item is **the name of the tag** and the second item **being *an array of posts* with that tag**.

```html
{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
```



### Categories

Categories of a post work similar to the tags above:

- They can be defined via the front matter using keys `category` or `categories` (that follow the same logic as for tags)
- All categories registered in the site are exposed to **Liquid templates** via `site.categories` which can be iterated over (similar to the loop for tags above.)

*The similarity between categories and tags however, ends there.*

Unlike tags, **categories for posts can also be defined by a post’s file path**. **Any directory above `_post` will be read-in as a category**. For example, if a post is at path `movies/horror/_posts/2019-05-21-bride-of-chucky.markdown`, then `movies` and `horror` are automatically registered as categories for that post.

When the post also has front matter defining categories, they just get added to the existing list if not present already.

**The hallmark difference between categories and tags is that** categories of a post may be incorporated into [the generated URL](https://jekyllrb.com/docs/permalinks/#global) for the post, while tags cannot be.

Therefore, depending on whether front matter has `category: classic hollywood`, or `categories: classic hollywood`, the example post above would have the URL as either `movies/horror/classic%20hollywood/2019/05/21/bride-of-chucky.html` 

or

 `movies/horror/classic/hollywood/2019/05/21/bride-of-chucky.html` 

respectively.



## Post excerpts[output a list of blog posts]

You can access a sn**ippet of a posts’s** content by using **`excerpt` variable** on a post. By default this is the first paragraph of content in the post, however it can be customized by setting a `excerpt_separator` variable in front matter or `_config.yml`.

Here’s an example of outputting a list of blog posts with an excerpt:

```
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
```



## Drafts[Preview site with drafts]

Drafts are posts without a date in the filename. They’re posts you’re still working on and don’t want to publish yet. To get up and running with drafts, create a `_drafts` folder in your site’s root and create your first draft:

```
.
├── _drafts
│   └── a-draft-post.md
...
```

To preview your site with drafts, run `jekyll serve` or `jekyll build` with the `--drafts` switch. Each will be assigned the value modification time of the draft file for its date, and thus you will see currently edited drafts as the latest posts.



# Front Matter

Any file that contains a [YAML](https://yaml.org/) front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:

```
---
layout: post
title: Blogging Like a Hacker
---
```

Between these triple-dashed lines, you can set **predefined variables**  or even create custom ones of your own. These variables will then be available for you to access using **Liquid tags** both further down in the file and also in any layouts or includes that the page or post in question relies on.

>  layout, title 就是 predefined variables



## Predefined Global Variables

| VARIABLE      | DESCRIPTION                                                  |
| ------------- | ------------------------------------------------------------ |
| **layout**    | If set, this specifies the layout file to use. Use the layout file name without the file extension. **Layout files must be placed in the `_layouts` directory.**<br />- Using `null` will produce a file without using a layout file. This is overridden if the file is a post/document and has a layout defined in the [front matter defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/).<br />- Starting from version 3.5.0, using `none` in a post/document will produce a file without using a layout file regardless of front matter defaults. Using `none` in a page will cause Jekyll to attempt to use a layout named "none". |
| **permalink** | If you need your processed blog post URLs to be something other than the site-wide style (default `/year/month/day/title.html`), then you can set this variable and it will be used as the final URL. |
| **published** | Set to false if you don’t want a specific post to show up when the site is generated. |



## Custom Variables

You can also set your own front matter variables you can access in Liquid. For instance, if you set a variable called `food`, you can use that in your page:

```
---
food: Pizza
---

<h1>{{ page.food }}</h1>
```



## Predefined Variables for Posts

These are available out-of-the-box to be used in the front matter **for a post**.

| Variable            | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| date                | A date here overrides the date from the name of the post. This can be used to ensure correct sorting of posts. A date is specified in the format `YYYY-MM-DD HH:MM:SS +/-TTTT`; hours, minutes, seconds, and timezone offset are optional. |
| category/categories | Instead of placing posts inside of folders, you can specify one or more categories that the post belongs to. When the site is generated the post will act as though it had been set with these categories normally. Categories (plural key) can be specified as a [YAML list](https://en.wikipedia.org/wiki/YAML#Basic_components) or a space-separated string.<br />是可以把这些posts都放入文件夹中管理的，但是这种方式更好 |
| tags                | Similar to categories, one or multiple tags can be added to a post. Also like categories, tags can be specified as a [YAML list](https://en.wikipedia.org/wiki/YAML#Basic_components) or a space-separated string. |



# Collections

Collections are a great way to group related content like members of a team or talks at a conference.

## Setup

To use a Collection **you first need to define it in** your `_config.yml`. For example here’s a collection of staff members:

```
collections:
  - staff_members
```

In this case `collections` is defined as a sequence (i.e., array) with no additional metadata defined for each collection. You can optionally specify metadata for your collection by defining `collections` as a mapping (i.e., hashmap) instead of sequence, and then defining additional fields in it:

```
collections:
  staff_members: # specify metadata
    people: true
```

> When defining a collection as a sequence, its pages will not be rendered by default. To enable this, `output: true` must be specified on the collection, which requires defining the collection as a mapping. For more information, see the section [Output](https://jekyllrb.com/docs/collections/#output).



> ##### Gather your collections3.7.0
>
> You can optionally specify a directory to store all your collections in the same place with `collections_dir: my_collections`.
>
> Then Jekyll will look in `my_collections/_books` for the `books` collection, and in `my_collections/_recipes` for the `recipes` collection.



> ##### Be sure to move drafts and posts into custom collections directory
>
> If you specify a directory to store all your collections in the same place with `collections_dir: my_collections`, then you will need to move your `_drafts` and `_posts` directory to `my_collections/_drafts` and `my_collections/_posts`. Note that, **the name of your collections directory cannot start with an underscore (`_`).**





## Add content

Create a corresponding folder (e.g. `<source>/_staff_members`) and add documents. Front matter is processed if the front matter exists, and everything after the front matter is pushed into the document’s `content` attribute. If no front matter is provided, Jekyll will consider it to be a [static file](https://jekyllrb.com/docs/static-files/) and the contents will not undergo further processing. If front matter is provided, Jekyll will process the file contents into the expected output.

Regardless of whether front matter exists or not, Jekyll will write to the destination directory (e.g. `_site`) only if `output: true` has been set in the collection’s metadata.

For example here’s how you would add a staff member to the collection set above. The filename is `./_staff_members/jane.md` with the following content:

```
---
name: Jane Doe
position: Developer
---
Jane has worked on Jekyll for the past *five years*.
```

*Do note that in spite of being considered as a collection internally, the above doesn’t apply to [posts](https://jekyllrb.com/docs/posts/). Posts with a valid filename format will be marked for processing even if they do not contain front matter.*




> **Be sure to name your directories correctly**
> The folder must be named identically to the collection you defined in your `_config.yml` file, with the addition of the preceding `_` character.



## Output[create a rendered page for each document in collection]

Now you can iterate over `site.staff_members` on a page and output the content for each staff member. Similar to posts, the body of the document is accessed using the **`content` variable**:

```html
{% for staff_member in site.staff_members %}
  <h2>{{ staff_member.name }} - {{ staff_member.position }}</h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}
```

If you’d like Jekyll to create a rendered page for each document in your collection, you can set the `output` key to `true` in your collection metadata in `_config.yml`:

```
collections:
  staff_members:
    output: true
```

You can link to the generated page using the `url` attribute:

```html
{% for staff_member in site.staff_members %}
  <h2>
    <a href="{{ staff_member.url }}">
      {{ staff_member.name }} - {{ staff_member.position }}
    </a>
  </h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}
```



## Permalinks [permanent links]

There are special [permalink variables for collections](https://jekyllrb.com/docs/permalinks/#collections) to help you control the output url for the entire collection.



## Custom Sorting of Documents[系列文章]

By default, two documents in a collection are sorted by their `date` attribute when both of them have the `date` key in their front matter. However, if either or both documents do not have the `date` key in their front matter, they are **sorted by their respective paths**.

You can **control this sorting via the collection’s metadata**.



### Sort by Front Matter Key

Documents can be sorted based on a front matter key by setting a `sort_by` metadata to the front matter key string. For example, to sort a collection of tutorials based on key `lesson`, the configuration would be:

```
collections:
  tutorials:
    sort_by: lesson
```

The documents are arranged in the increasing order of the key’s value. If a document does not have the front matter key defined then that document is placed immediately after sorted documents. When multiple documents do not have the front matter key defined, those documents are sorted by their dates or paths and then placed immediately after the sorted documents.



### Manually Ordering Documents

You can also manually order the documents by setting an `order` metadata with **the filenames listed** in the desired order. For example, a collection of tutorials would be configured as:

```
collections:
  tutorials:
    order:
      - hello-world.md
      - introduction.md
      - basic-concepts.md
      - advanced-concepts.md
```

Any documents with filenames that do not match the list entry simply gets placed after the rearranged documents. If a document is nested under subdirectories, include them in entries as well:

```
collections:
  tutorials:
    order:
      - hello-world.md
      - introduction.md
      - concepts/basics.md
      - concepts/advanced.md
```

If both metadata keys have been defined properly, `order` list takes precedence.

## Liquid Attributes

### Collections

Collections are also available under `site.collections`, with the metadata you specified in your `_config.yml` (if present) and the following information:

| VARIABLE             | DESCRIPTION                                                  |
| -------------------- | ------------------------------------------------------------ |
| `label`              | The name of your collection, e.g. `my_collection`.           |
| `docs`               | An array of [documents](https://jekyllrb.com/docs/collections/#documents). |
| `files`              | An array of static files in the collection.                  |
| `relative_directory` | The path to the collection's source directory, relative to the site source. |
| `directory`          | The full path to the collections's source directory.         |
| `output`             | Whether the collection's documents will be output as individual files. |

>**A Hard-Coded Collection**
>
>In addition to any collections you create yourself, the `posts` collection is hard-coded into Jekyll. It exists whether you have a `_posts` directory or not. This is something to note when iterating through `site.collections` as you may need to filter it out.
>
>You may wish to use filters to find your collection: `{{ site.collections | where: "label", "myCollection" | first }}`



> **Collections and Time**
>
> Except for documents in hard-coded default collection `posts`, all documents in collections you create, are accessible via Liquid irrespective of their assigned date, if any, and therefore renderable.
>
> Documents are attempted to be written to disk only if the concerned collection metadata has `output: true`. Additionally, future-dated documents are only written if `site.future` *is also true*.
>
> More fine-grained control over documents being written to disk can be exercised by setting `published: false` (*`true` by default*) in the document's front matter.






### Documents

In addition to any front matter provided in the document’s corresponding file, each document has the following attributes:

| VARIABLE        | DESCRIPTION                                                  |
| --------------- | ------------------------------------------------------------ |
| `content`       | The (unrendered) content of the document. If no front matter is provided, Jekyll will not generate the file in your collection. If front matter is used, then this is all the contents of the file after the terminating `---` of the front matter. |
| `output`        | The rendered output of the document, based on the `content`. |
| `path`          | The full path to the document's source file.                 |
| `relative_path` | The path to the document's source file relative to the site source. |
| `url`           | The URL of the rendered collection. The file is only written to the destination when the collection to which it belongs has `output: true` in the site's configuration. |
| `collection`    | The name of the document's collection.                       |
| `date`          | The date of the document's collection.                       |



# Liquid

Jekyll uses the [Liquid](https://shopify.github.io/liquid/) templating language to process templates.

Generally in Liquid you output content using two curly braces e.g. `{{ variable }}` and perform logic statements by surrounding them in a curly brace percentage sign e.g. `{% if statement %}`. To learn more about Liquid, check out the [official Liquid Documentation](https://shopify.github.io/liquid/).

Jekyll provides a number of useful Liquid additions to help you build your site:

## Liquid Filters[类似数据库的功能]

All of the standard Liquid [filters](https://jekyllrb.com/docs/liquid/filters/#standard-liquid-filters) are supported (see below).

To make common tasks easier, Jekyll even adds a few handy filters of its own, all of which you can find on this page. You can also create your own filters using [plugins](https://jekyllrb.com/docs/plugins/).

| DESCRIPTION                                                  | FILTER AND OUTPUT                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Relative URL** Prepend `baseurl` config value to the input to convert a URL path into a relative URL. This is recommended for a site that is hosted on a subpath of a domain. | `{{ "/assets/style.css" | relative_url }}``/my-baseurl/assets/style.css` |
| **Absolute URL** Prepend `url` and `baseurl` values to the input to convert a URL path to an absolute URL. | `{{ "/assets/style.css" | absolute_url }}``http://example.com/my-baseurl/assets/style.css` |
| **Date to XML Schema** Convert a Date into XML Schema (ISO 8601) format. | `{{ site.time | date_to_xmlschema }}``2008-11-07T13:07:54-08:00` |
| **Date to RFC-822 Format **Convert a Date into the RFC-822 format used for RSS feeds. | `{{ site.time | date_to_rfc822 }}``Mon, 07 Nov 2008 13:07:54 -0800` |
| **Date to String**Convert a date to short format.            | `{{ site.time | date_to_string }}``07 Nov 2008`              |
| **Date to String in ordinal US style**Format a date to ordinal, US, short format. 3.8.0 | `{{ site.time | date_to_string: "ordinal", "US" }}``Nov 7th, 2008` |
| **Date to Long String**Format a date to long format.         | `{{ site.time | date_to_long_string }}``07 November 2008`    |
| **Date to Long String in ordinal UK style**Format a date to ordinal, UK, long format. 3.8.0 | `{{ site.time | date_to_long_string: "ordinal" }}``7th November 2008` |
| **Where**Select all the objects in an array where the key has the given value. | `{{ site.members | where:"graduation_year","2014" }}`        |
| **Where Expression**Select all the objects in an array where the expression is true. 3.2.0 | `{{ site.members | where_exp:"item", "item.graduation_year == 2014" }}``{{ site.members \| where_exp:"item", "item.graduation_year < 2014" }}``{{ site.members | where_exp:"item", "item.projects contains 'foo'" }}` |
| **Find**Return **the first object** in an array for which the queried attribute has the given value or return `nil` if no item in the array satisfies the given criteria. 4.1.0 | `{{ site.members | find: "graduation_year", "2014" }}`       |
| **Find Expression**Return **the first object** in an array for which the given expression evaluates to true or return `nil` if no item in the array satisfies the evaluated expression. 4.1.0 | `{{ site.members | find_exp:"item", "item.graduation_year == 2014" }}``{{ site.members \| find_exp:"item", "item.graduation_year < 2014" }}``{{ site.members | find_exp:"item", "item.projects contains 'foo'" }}` |
| **Group By**Group an array's items by a given property.      | `{{ site.members | group_by:"graduation_year" }}``[{"name"=>"2013", "items"=>[...]}, {"name"=>"2014", "items"=>[...]}]` |
| **Group By Expression**Group an array's items using a Liquid expression. 3.4.0 | `{{ site.members | group_by_exp: "item", "item.graduation_year | truncate: 3, ''" }}``[{"name"=>"201", "items"=>[...]}, {"name"=>"200", "items"=>[...]}]` |
| **XML Escape**Escape some text for use in XML.               | `{{ page.content | xml_escape }}`                            |
| **CGI Escape**CGI escape a string for use in a URL. Replaces any special characters with appropriate `%XX` replacements. CGI escape normally replaces a space with a plus `+` sign. | `{{ "foo, bar; baz?" | cgi_escape }}``foo%2C+bar%3B+baz%3F`  |
| **URI Escape**Percent encodes any special characters in a URI. URI escape normally replaces a space with `%20`. [Reserved characters](https://en.wikipedia.org/wiki/Percent-encoding#Types_of_URI_characters) will not be escaped. | `{{ "http://foo.com/?q=foo, \bar?" | uri_escape }}``http://foo.com/?q=foo,%20%5Cbar?` |
| **Number of Words**Count the number of words in some text. From v4.1.0, this filter takes an optional argument to control the handling of Chinese-Japanese-Korean (CJK) characters in the `input` string. Passing `'cjk'` as the argument will count every CJK character detected as one word irrespective of being separated by whitespace. Passing `'auto'` (auto-detect) works similar to `'cjk'` but is more performant if the filter is used on a variable string that may or may not contain CJK chars. | `{{ "Hello world!" | number_of_words }}``2``{{ "你好hello世界world" | number_of_words }}``1``{{ "你好hello世界world" | number_of_words: "cjk" }}``6``{{ "你好hello世界world" | number_of_words: "auto" }}``6` |
| **Array to Sentence**Convert an array into a sentence. Useful for listing tags. Optional argument for connector. | `{{ page.tags | array_to_sentence_string }}``foo, bar, and baz``{{ page.tags | array_to_sentence_string: "or" }}``foo, bar, or baz` |
| **Markdownify**Convert a Markdown-formatted string into HTML. | `{{ page.excerpt | markdownify }}`                           |
| **Smartify**Convert "quotes" into “smart quotes.”            | `{{ page.title | smartify }}`                                |
| **Converting Sass/SCSS**Convert a Sass- or SCSS-formatted string into CSS. | `{{ some_sass | sassify }}``{{ some_scss \| scssify }}`      |
| **Slugify**Convert a string into a lowercase URL "slug". See below for options. | `{{ "The _config.yml file" | slugify }}``the-config-yml-file``{{ "The _config.yml file" | slugify: "pretty" }}``the-_config.yml-file``{{ "The _cönfig.yml file" | slugify: "ascii" }}``the-c-nfig-yml-file``{{ "The cönfig.yml file" | slugify: "latin" }}``the-config-yml-file` |
| **Data To JSON**Convert Hash or Array to JSON.               | `{{ site.data.projects | jsonify }}`                         |
| **Normalize Whitespace**Replace any occurrence of whitespace with a single space. | `{{ "a \n b" | normalize_whitespace }}`                      |
| **Sort**Sort an array. Optional arguments for hashes 1. property name 2. nils order (*first* or *last*). | `{{ page.tags | sort }}``{{ site.posts \| sort: "author" }}``{{ site.pages | sort: "title", "last" }}` |
| **Sample**Pick a random value from an array. Optionally, pick multiple values. | `{{ site.pages | sample }}``{{ site.pages \| sample: 2 }}`   |
| **To Integer**Convert a string or boolean to integer.        | `{{ some_var | to_integer }}`                                |
| **Array Filters**Push, pop, shift, and unshift elements from an Array. These are **NON-DESTRUCTIVE**, i.e. they do not mutate the array, but rather make a copy and mutate that. | `{{ page.tags | push: "Spokane" }}``["Seattle", "Tacoma", "Spokane"]``{{ page.tags | pop }}``["Seattle"]``{{ page.tags | shift }}``["Tacoma"]``{{ page.tags | unshift: "Olympia" }}``["Olympia", "Seattle", "Tacoma"]` |
| **Inspect**Convert an object into its String representation for debugging. | `{{ some_var | inspect }}`                                   |



### Options for the `slugify` filter

The `slugify` filter accepts an option, each specifying what to filter. The default is `default`. They are as follows (with what they filter):

- `none`: no characters
- `raw`: spaces
- `default`: spaces and non-alphanumeric characters
- `pretty`: spaces and non-alphanumeric characters except for `._~!$&'()+,;=@`
- `ascii`: spaces, non-alphanumeric, and non-ASCII characters
- `latin`: like `default`, except Latin characters are first transliterated (e.g. `àèïòü` to `aeiou`)3.7.0 .

### Detecting `nil` values with `where` filter 4.0

You can use the `where` filter to detect documents and pages with properties that are `nil` or `""`. For example,

```
// Using `nil` to select posts that either do not have `my_prop`
// defined or `my_prop` has been set to `nil` explicitly.
{% assign filtered_posts = site.posts | where: 'my_prop', nil %}
// Using Liquid's special literal `empty` or `blank` to select
// posts that have `my_prop` set to an empty value.
{% assign filtered_posts = site.posts | where: 'my_prop', empty %}
```

### Binary operators in `where_exp` filter 4.0

You can use Liquid binary operators `or` and `and` in the expression passed to the `where_exp` filter to employ multiple conditionals in the operation.

For example, to get a list of documents on English horror flicks, one could use the following snippet:

```
{{ site.movies | where_exp: "item", "item.genre == 'horror' and item.language == 'English'" }}
```

Or to get a list of comic-book based movies, one may use the following:

```
{{ site.movies | where_exp: "item", "item.sub_genre == 'MCU' or item.sub_genre == 'DCEU'" }}
```

### Standard Liquid Filters

For your convenience, here is the list of all [Liquid filters](https://shopify.github.io/liquid/filters/) with links to examples in the official Liquid documentation.

- [abs](https://shopify.github.io/liquid/filters/abs/)
- [append](https://shopify.github.io/liquid/filters/append/)
- [at_least](https://shopify.github.io/liquid/filters/at_least/)
- [at_most](https://shopify.github.io/liquid/filters/at_most/)
- [capitalize](https://shopify.github.io/liquid/filters/capitalize/)
- [ceil](https://shopify.github.io/liquid/filters/ceil/)
- [compact](https://shopify.github.io/liquid/filters/compact/)
- [concat](https://shopify.github.io/liquid/filters/concat/)
- [date](https://shopify.github.io/liquid/filters/date/)
- [default](https://shopify.github.io/liquid/filters/default/)
- [divided_by](https://shopify.github.io/liquid/filters/divided_by/)
- [downcase](https://shopify.github.io/liquid/filters/downcase/)
- [escape](https://shopify.github.io/liquid/filters/escape/)
- [escape_once](https://shopify.github.io/liquid/filters/escape_once/)
- [first](https://shopify.github.io/liquid/filters/first/)
- [floor](https://shopify.github.io/liquid/filters/floor/)
- [join](https://shopify.github.io/liquid/filters/join/)
- [last](https://shopify.github.io/liquid/filters/last/)
- [lstrip](https://shopify.github.io/liquid/filters/lstrip/)
- [map](https://shopify.github.io/liquid/filters/map/)
- [minus](https://shopify.github.io/liquid/filters/minus/)
- [modulo](https://shopify.github.io/liquid/filters/modulo/)
- [newline_to_br](https://shopify.github.io/liquid/filters/newline_to_br/)
- [plus](https://shopify.github.io/liquid/filters/plus/)
- [prepend](https://shopify.github.io/liquid/filters/prepend/)
- [remove](https://shopify.github.io/liquid/filters/remove/)
- [remove_first](https://shopify.github.io/liquid/filters/remove_first/)
- [replace](https://shopify.github.io/liquid/filters/replace/)
- [replace_first](https://shopify.github.io/liquid/filters/replace_first/)
- [reverse](https://shopify.github.io/liquid/filters/reverse/)
- [round](https://shopify.github.io/liquid/filters/round/)
- [rstrip](https://shopify.github.io/liquid/filters/rstrip/)
- [size](https://shopify.github.io/liquid/filters/size/)
- [slice](https://shopify.github.io/liquid/filters/slice/)
- [sort](https://shopify.github.io/liquid/filters/sort/)
- [sort_natural](https://shopify.github.io/liquid/filters/sort_natural/)
- [split](https://shopify.github.io/liquid/filters/split/)
- [strip](https://shopify.github.io/liquid/filters/strip/)
- [strip_html](https://shopify.github.io/liquid/filters/strip_html/)
- [strip_newlines](https://shopify.github.io/liquid/filters/strip_newlines/)
- [times](https://shopify.github.io/liquid/filters/times/)
- [truncate](https://shopify.github.io/liquid/filters/truncate/)
- [truncatewords](https://shopify.github.io/liquid/filters/truncatewords/)
- [uniq](https://shopify.github.io/liquid/filters/uniq/)
- [upcase](https://shopify.github.io/liquid/filters/upcase/)
- [url_decode](https://shopify.github.io/liquid/filters/url_decode/)
- [url_encode](https://shopify.github.io/liquid/filters/url_encode/)



## Tags Filters

All of the standard Liquid [tags](https://shopify.github.io/liquid/tags/control-flow/) are supported. Jekyll has a few built in tags to help you build your site. You can also create your own tags using [plugins](https://jekyllrb.com/docs/plugins/).

### Includes

If you have page snippets that you use repeatedly across your site, an [include](https://jekyllrb.com/docs/includes/) is the perfect way to make this more maintainable.

==学一下include==

### Code snippet highlighting

Jekyll has built in support for syntax highlighting of over 100 languages thanks to [Rouge](http://rouge.jneen.net/). Rouge is the default highlighter in Jekyll 3 and above.

Using Pygments has been deprecated and is not supported in Jekyll 4; the configuration setting `highlighter: pygments` now automatically falls back to using *Rouge* which is written in Ruby and 100% compatible with stylesheets for Pygments.

To render a code block with syntax highlighting, surround your code as follows:

```
{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}
```

The argument to the `highlight` tag (`ruby` in the example above) is the language identifier. To find the appropriate identifier to use for the language you want to highlight, look for the “short name” on the [Rouge wiki](https://github.com/jayferd/rouge/wiki/List-of-supported-languages-and-lexers).

> Jekyll processes all Liquid filters in code blocks
> If you are using a language that contains curly braces, you will likely need to place `{% raw %}` and `{% endraw %}` tags around your code. Since Jekyll 4.0 , you can add `render_with_liquid: false` in your front matter to disable Liquid entirely for a particular document.



#### Line numbers[Permalink](https://jekyllrb.com/docs/liquid/tags/#line-numbers)

There is a second argument to `highlight` called `linenos` that is optional. Including the `linenos` argument will force the highlighted code to include line numbers. For instance, the following code block would include line numbers next to each line:

```
{% highlight ruby linenos %}
def foo
  puts 'foo'
end
{% endhighlight %}
```

#### Stylesheets for syntax highlighting[Permalink](https://jekyllrb.com/docs/liquid/tags/#stylesheets-for-syntax-highlighting)

In order for the highlighting to show up, you’ll need to include a highlighting stylesheet. For Pygments or Rouge you can use a stylesheet for Pygments, you can find an example gallery [here](https://jwarby.github.io/jekyll-pygments-themes/languages/ruby.html) or from [its repository](https://github.com/jwarby/jekyll-pygments-themes).

Copy the CSS file (`native.css` for example) into your css directory and import the syntax highlighter styles into your `main.css`:

```
@import "native.css";
```

### Links[Permalink](https://jekyllrb.com/docs/liquid/tags/#links)

Since Jekyll 4.0 , you don’t need to prepend `link` and `post_url` tags with `site.baseurl`.

#### Linking to pages[Permalink](https://jekyllrb.com/docs/liquid/tags/#link)

To link to a post, a page, collection item, or file, the `link` tag will generate the correct permalink URL for the path you specify. For example, if you use the `link` tag to link to `mypage.html`, even if you change your permalink style to include the file extension or omit it, the URL formed by the `link` tag will always be valid.

You must include the file’s original extension when using the `link` tag. Here are some examples:

```
{% link _collection/name-of-document.md %}
{% link _posts/2016-07-26-name-of-post.md %}
{% link news/index.html %}
{% link /assets/files/doc.pdf %}
```

You can also use the `link` tag to create a link in Markdown as follows:

```
[Link to a document]({% link _collection/name-of-document.md %})
[Link to a post]({% link _posts/2016-07-26-name-of-post.md %})
[Link to a page]({% link news/index.html %})
[Link to a file]({% link /assets/files/doc.pdf %})
```

The path to the post, page, or collection is defined as the path relative to the root directory (where your config file is) to the file, not the path from your existing page to the other page.

For example, suppose you’re creating a link in `page_a.md` (stored in `pages/folder1/folder2`) to `page_b.md` (stored in `pages/folder1`). Your path in the link would not be `../page_b.html`. Instead, it would be `/pages/folder1/page_b.md`.

If you’re unsure of the path, add `{{ page.path }}` to the page and it will display the path.

One major benefit of using the `link` or `post_url` tag is link validation. If the link doesn’t exist, Jekyll won’t build your site. This is a good thing, as it will alert you to a broken link so you can fix it (rather than allowing you to build and deploy a site with broken links).

Note you cannot add filters to `link` tags. For example, you cannot append a string using Liquid filters, such as `{% link mypage.html | append: "#section1" %}`. To link to sections on a page, you will need to use regular HTML or Markdown linking techniques.

The name of the file you want to link can be specified as a variable instead of an actual file name. For example, suppose you defined a variable in your page’s front matter like this:

```
---
title: My page
my_variable: footer_company_a.html
---
```

You could then reference that variable in your link:

```
{% link {{ page.my_variable }} %}
```

In this example, the `link` tag would render a link to the file `footer_company_a.html`.

#### Linking to posts[Permalink](https://jekyllrb.com/docs/liquid/tags/#linking-to-posts)

If you want to include a link to a post on your site, the `post_url` tag will generate the correct permalink URL for the post you specify.

```
{% post_url 2010-07-21-name-of-post %}
```

If you organize your posts in subdirectories, you need to include subdirectory path to the post:

```
{% post_url /subdir/2010-07-21-name-of-post %}
```

There is no need to include the file extension when using the `post_url` tag.

You can also use this tag to create a link to a post in Markdown as follows:

```
[Name of Link]({% post_url 2010-07-21-name-of-post %})
```

