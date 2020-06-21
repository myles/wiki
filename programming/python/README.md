# Python

<dfn>Python</dfn> is a programming language.

## Snippets

### `*args` & `**kwargs`?

```python
>>> def hello(*args, **kwargs):
...     gretting = kwargs.pop('gretting', 'Hello')
...
...     print(f"""{gretting} {' '.join(args)}!""")
...
>>>
>>> hello("Laura", "Dang", gretting="Hi")
Hi Laura Dang!
```

-   [How To Use \*args and \*\*kwargs in Python 3](https://www.digitalocean.com/community/tutorials/how-to-use-args-and-kwargs-in-python-3) by Lisa Tagliaferri, 20 November 2017.

### Bare asterisk (`*`) in function argument

In Python 3 you can specify `*` in the argument list:

> Parameters after "*" or "*identifier" are keyword-only parameters and may only be passed used keyword arguments.
>
> <cite><a href="https://docs.python.org/3.5/reference/compound_stmts.html#function-definitions">Python 3.5 Documentation</a></cite>

```python
>>> def is_birthday(*, birthday):
...     today = datetime.date.today()
...     if birthday.month == today.month and birthday.day == today.day:
...         print(f"Yes it's their birthday.")
...     else:
...         print(f"No it's not their birthday.")
...
>>>
>>> is_birthday(datetime.date(1986, 9, 19))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: is_birthday() takes exactly 1 positional argument (1 given)
>>>
>>> is_birthday(birthday=datetime.date(1986, 9, 19))
No it's not their birthday.
>>>
```

-   Reference: [Forced naming of parameters in Python](https://stackoverflow.com/a/14298976) by Eli Bendersky, 12 January 2013.

### Coerce to `NamedTuple`

```python
from typing import Any, Dict, NamedTuple, Type


class AlbumTuple(NamedTuple):
    """Album Tuple Class."""
    name: str
    artist: str
    length: float


def coerce_to_namedtuple(d: Dict[str, Any], T: Type):
    """Create a NamedTuple from a dict, ignoring extra keys in the dict"""
    return T(**{k: v for k, v in d.items() if k in T._fields})


album = dict(name="Liar", artist="Fake Shark - Real Zombie!", length=47.15)
print(coerce_to_namedtuple(d, AlbumTuple))
# output: AlbumTuple(name="Liar", artist="Fake Shark - Real Zombie!", length=47.15)
```

-   Reference: [coerce_to_namedtuple.py](https://gist.github.com/andymitchhank/7677786e1d49eda7f6b70002e74915f7) by [Andy Mitchhank](https://andymitchhank.com/)


## Libraries

-   [Camelot](https://camelot-py.readthedocs.io/en/master/) - PDF Table Extraction for Humans - [:megaphone:](https://blog.socialcops.com/technology/engineering/camelot-python-library-pdf-data/ "Announcing Camelot, a Python Library to Extract Tabular Data from PDFs") [:octopus:](https://github.com/socialcopsdev/camelot/ "Camelot on GitHub") [:snake:](https://pypi.org/project/camelot-py/ "Camelot on PyPi")
-   [cleanco](https://github.com/psolin/cleanco) - Cleans companies names by stripping away terms indicating organization type - [:snake:](https://pypi.org/project/cleanco/ "cleanco on PyPi")
-   [Datafiles](https://datafiles.readthedocs.io/) - a file-based ORM for dataclasses - [:octopus:](https://github.com/jacebrowning/datafiles "datafiles on GitHub") [:snake:](https://pypi.org/project/datafiles/ "datafiles on PyPi")
-   [dataset](https://dataset.readthedocs.io/en/latest/index.html) - Databases for lazy people. - [:octopus:](https://github.com/pudo/dataset "dataset on GitHub")
    [:snake:](https://pypi.org/project/dataset/ "dataset on PyPi")
-   [lab_getting_started.py](http://blog.varunajayasiri.com/ml/lab/lab_getting_started.html) - Lets you organize TensorFlow machine learning projects
    [:snake:](https://pypi.org/project/yaps/ "yaps on PyPi")
-   [py-spy](https://github.com/benfred/py-spy) - sampling profiler for Python programs
-   [tartiflette](https://tartiflette.io/) - Tartiflette is a GraphQL Engine, built on top of Python 3.6 and above. Focused on building GraphQL APIs using the awesome Schema Definition Language. - [:octopus:](https://github.com/dailymotion/tartiflette "tartiflette on GitHub") [:snake:](https://pypi.org/project/tartiflette/ "tartiflette on PyPi")
-   [yaps](https://ibm.github.io/yaps/) - a surface language for programming Stan models using python syntax - [:octopus:](https://github.com/ibm/yaps "yaps on GitHub")
-   [Typer](https://typer.tiangolo.com/) - Typer is library to build CLI applications that users will love using and developers will love creating. - [:octopus:](https://github.com/tiangolo/typer "Typer on GitHub")

### Data Science

-   [datacompy](https://capitalone.github.io/datacompy/) - Pandas and Spark DataFrame comparison for humans - [:octopus:](https://github.com/capitalone/datacompy "datacompy on GitHub")  [:snake:](https://pypi.org/project/datacompy' "datacompy on PyPi")
-   [intake](https://intake.readthedocs.io/en/latest/index.html) - A plugin system for loading your data and making data catalogs - [:octopus:](https://github.com/ContinuumIO/intake "intake") [:snake:](https://pypi.org/project/intake' "intake on PyPi")
-   [locopy](https://capitalone.github.io/Data-Load-and-Copy-using-Python/) - Loading/Unloading to Amazon Redshift - [:octopus:](https://github.com/capitalone/Data-Load-and-Copy-using-Python "locopy on GitHub") [:snake:](https://pypi.org/project/locopy' "locopy on PyPi")
-   [Luigi](https://luigi.readthedocs.io/en/stable/) - a Python module that helps you build complex pipelines of batch jobs - [:octopus:](https://github.com/spotify/luigi "Luigi on GitHub") [:snake:](https://pypi.org/project/luigi/' "Luigi on PyPi")
-   [Vaex](https://vaex.io/) - visualize and explore big tabular data at a billion rows per second - [:bookmark_tabs:](https://docs.vaex.io/en/latest/ "Vaex documentation") [:octopus:](https://github.com/vaexio/vaex/ "Vaex on GitHub") [:snake:](https://pypi.org/project/vaex/ "Vaex on PyPi") [:megaphone:](https://towardsdatascience.com/vaex-a-dataframe-with-super-strings-789b92e8d861 "Vaex: A DataFrame with super strings by Maarten Breddels")

## Templates

-   [Python Packages Project Generator](https://github.com/TezRomacH/python-package-template) - cookiecutter template for the most state-of-the-art libraries and best development practices for Python.

## Links

-   [Detecting SQL injections in Python code using AST](https://rushter.com/blog/detecting-sql-injections-in-python/) by Artem Golubin, 29 April 2019
-   [Dive into Machine Learning](https://akashgupta299.gitbooks.io/dive-into-ml/content/)
-   [Einstein Summation in Numpy](https://obilaniu6266h16.wordpress.com/2016/02/04/einstein-summation-in-numpy/) by Olexa Bilaniuk, 4 February 2016
-   [My Python Development Environment](https://jacobian.org/2018/feb/21/python-environment-2018/) by Jacob Kaplan-Moss, 21 February 2018.
-   [Named Entity Recognition with NLTK and SpaCy](https://towardsdatascience.com/named-entity-recognition-with-nltk-and-spacy-8c4a7d88e7da) by Susan Li, 17 August 2018.
-   [Python at Netflix](https://medium.com/netflix-techblog/python-at-netflix-bba45dae649e), 29 April 2019
-   [Text Preprocessing in Python: Steps, Tools, and Examples](https://medium.com/@datamonsters/text-preprocessing-in-python-steps-tools-and-examples-bf025f872908) by Olga Davydova, 15 October 2018
-   [Working efficiently with JupyterLab Notebooks](https://florianwilhelm.info/2018/11/working_efficiently_with_jupyter_lab/) by Florian Wilhelm, 8 November 2018.
-   [wtfpython](https://github.com/satwikkansal/wtfpython) - A collection of surprising Python snippets and lesser-known features.
-   [Understanding the asterisk(*) of Python](https://medium.com/understand-the-python/understanding-the-asterisk-of-python-8b9daaa4a558) by mingrammer, 20 March 2017.

