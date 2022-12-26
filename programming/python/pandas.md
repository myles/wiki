# pandas

<dfn>pandas</dfn> is a [Python][1] library for data manipulation and analysis.

![Panda Eating Bamboo][image-1]

## Libaries

-   [jardin][9] - a `pandas.DataFrame`-based ORM - [:octopus:][10] [:snake:][11]
-   [Modin][2] - speed up your Pandas workflows by changing a single line of code - [:megaphone:][3] [:octopus:][4] [:snake:][5]
-   Pandaral·lel - A simple and efficient tool to parallelize your pandas operations on all your CPUs on Linux & macOS - [:octopus:](https://github.com/nalepae/pandarallel "pandarallel on GitHub") [:snake:](https://pypi.org/project/pandas-pandarallel/ "pandarallel on PyPi")
-   [Pandas Bokeh][6] - a Bokeh plotting backend for Pandas and GeoPandas - [:octopus:][7] [:snake:][8]
-   [pandas-datareader](https://pydata.github.io/pandas-datareader/) - up to date remote data access for pandas - [:octopus:](https://github.com/pydata/pandas-datareader) [:snake:](https://pypi.org/project/pandas-datareader/)
-   Pandas Profiling - Generates profile reports from a pandas `DataFrame` - [:octopus:](https://github.com/pandas-profiling/pandas-profiling "Pandas Profiling on GitHub") [:snake:](https://pypi.org/project/pandas-profiling/ "Pandas Profiling on PyPi")
-   [PrettyPandas][12] - is a Pandas DataFrame Styler class that helps you create report quality tables - [:octopus:][13] [:snake:][14]

## Links

-   [A Gentle Visual Intro to Data Analysis in Python Using Pandas][15] by Jay Alammar, 29 October 2018.
-   [Building a Repeatable Data Analysis Process with Jupyter Notebooks][17] by Chris Moffitt, 20 November 2018.
-   [Gaining a solid understanding of Pandas series](https://towardsdatascience.com/gaining-a-solid-understanding-of-pandas-series-893fb8f785aa) by Akshar Raaj, 4 August 2019.
-   [How to make a gif map using Python, Geopandas and Matplotlib](https://towardsdatascience.com/how-to-make-a-gif-map-using-python-geopandas-and-matplotlib-cd8827cefbc8) by Benjamin Cooley, 10 October 2018.
-   [Improve panda’s Excel Output][16] by Chris Moffitt, 8 April 2015.

## Notes

-   [`pandas.io.json.json_normalize`][18] is a function to _normalize_ structured JSON into a flat `dataframe`. Useful for working with data that comes from an JSON API.

## Snippets

### Connect to a SQLite database

```python
import pandas as pd
import sqlite

conn = sqlite3.connect("database.sqlite")
df = pd.read_sql_query("SELECT * FROM table_name;", conn)

df.head()
```

### Using a SQLAlchemy engine to connect to a database

```python
import pandas as pd
import numpy as np
from sqlalchemy import create_engine

engine = create_engine("postgresql:///database")

df = pd.read_sql_query("SELECT * FROM table;", con=engine)

df.head()
```

### Python compatible column names with slugify

Usually I'm dealing with data from external sources that don't have pretty columns names. I like to use [slugify][19] to convert them to Python compatible keys.

```python
from slugify import slugify

df.columns = [slugify(c, separator="_", to_lower=True) for c in df.columns]
```

### Read CSV file with all cells as strings

```python
>>> df = pd.read_csv("data/source/example.csv", dtype=str)
>>> df.dtypes
ID                         object
NAME                       object
SALARY                     object
```

### Traspose `DataFrame` and view all rows

```python
>>> with pd.option_context("display.max_rows", None):
...    print(df.head(1).transpose())
ID                         1
NAME       Myles Braithwaite
SALARY               $10,000
```

### Convert a column from continuous to categorical

```python
>>> df["age_groups"] = pd.cut(
...     df.age,
...     bins=[0, 18, 65, 99],
...     labels=["child", "adult", "elderly"]
... )
```

Kevin Markham ([justmarkham](https://twitter.com/justmarkham)) - <https://twitter.com/justmarkham/status/1146040449678925824>

### Read a CSV file data in chunk size

Sometimes a CSV is just to large for the memory on your computer. You can tell the argument `chunksize` how many rows of data you would like to load.

```python
df_chunks = pd.read_csv("data/source/data.csv", chunksize=10000)

df_chunks[0].head()
```

If you would like to load the scale down the data and load the it into one `pd.DataFrame`:

```python
def chunk_preprocessing(df):
    """Preprocess a chunk of the data before analysis.

    Arguments
    ————————-
    df : `pd.DataFrame`
        The chunk of the data source that needs to be processed.
    """
    pass


df_chunks_processed = [
    chunk_preprocessing(df)
    for df in df_chunks
]

df_concat = pd.concat(df_chunks_processed)
```

### Pandas/SQL Rosetta Stone

#### `IN` / `pandas.DataFrame.isin`

```sql
SELECT *
FROM table
WHERE
    city IN (
        "Toronto",
        "Richmond Hill"
    );
```

```python
# City is ether Toronto or Richmond Hill:
df[df['city'].isin(['Toronto', 'Richmond Hill'])]

# City is not Markdale or Oakville:
df[~df['city'].isin(['Markdale', 'Oakville'])]
```

See the pandas documentation for more information on [`pandas.DataFrame.isin`][20].

[1]: README.md

[2]: https://modin.readthedocs.io/en/latest/

[3]: https://rise.cs.berkeley.edu/blog/modin-pandas-on-ray-october-2018/ "Modin (Pandas on Ray)"

[4]: https://github.com/modin-project/modin/ "Modin on GitHub"

[5]: https://pypi.org/project/modin/ "Modin on PyPi"

[6]: https://github.com/PatrikHlobil/Pandas-Bokeh

[7]: https://github.com/PatrikHlobil/Pandas-Bokeh "Pandas Bokeh on GitHub"

[8]: https://pypi.org/project/pandas-bokeh/ "Pandas Bokeh on PyPi"

[9]: https://jardin.readthedocs.io/en/latest/

[10]: https://github.com/instacart/jardin "jardin on GitHub"

[11]: https://pypi.org/project/jardin/ "jardin on PyPi"

[12]: https://prettypandas.readthedocs.io/en/latest/

[13]: https://github.com/HHammond/PrettyPandas "PrettyPandas on GitHub"

[14]: https://pypi.org/project/prettypandas/ "PrettyPandas on PyPi"

[15]: https://jalammar.github.io/gentle-visual-intro-to-data-analysis-python-pandas/

[16]: http://pbpython.com/improve-pandas-excel-output.html

[17]: http://pbpython.com/notebook-process.html

[18]: https://pandas.pydata.org/pandas-docs/stable/generated/pandas.io.json.json_normalize.html

[19]: https://pypi.python.org/pypi/awesome-slugify

[20]: https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.isin.html

[image-1]: https://myles.wiki/assets/gifs/panda-eating.gif
