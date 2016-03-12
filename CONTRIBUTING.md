The phrasebook was initially just designed for my own use, but if anyone else
finds it useful, they are welcome to use it and to share some phrases,
translations or features.

The process for each type of contribution is outlined below.

**Adding a new languge**
If you are skilled enough in both English and another language to add a
translation, there's a simply a single file you need to create;

1. Fork the repository
2. Create a branch fory your new language
3. Duplicate the `fi.yml` file, changing the name to the
   [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes#Partial_ISO_639_table)
   language code of the language.
4. Replace the language's english anme and native name at the top of the file.
5. Replace the Finnish text with your language's text, so, in the example;
    injuries: Oletko vahingoittunut? # Are you injured?
   You'd leave the `injuries:` and everything after the `#` unchanged.
6. Make a pull-request to the `master` branch
7. Pull requests will initially be sanity-checked with Google Translate or
   similar.
7. Pull requests will then be merged once a second, independent person with
   knowledge if the language in question has checked the translation

**Adding a phrase**
If you have a phrase idea, [create an issue](https://github.com/mtthwhggns/first-aid-phrases/issues/new), 
as this is a good way to discuss them.
Please suggest your new phrase, and give a little background to why you think
it's useful.

Once we are agreed, a branch will be created with the English phrase added. Once
a pull-request has been accepted for each language present, the branch can be
merged into `master`.

**Features**
If you want to work on something else, feel free to make a pull request. 

Avoid changing the YAML files in `data/` for this type of change.

Before embarking on anything big, let's discuss it in Issues first. 
