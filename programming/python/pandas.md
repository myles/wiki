# pandas

<dfn>pandas</dfn> is a [Python][1] library for data manipulation and analysis.

![Panda Eating Bamboo](../../assets/gifs/panda-eating.gif)

## Libaries

-   [Modin](https://modin.readthedocs.io/en/latest/) - speed up your Pandas workflows by changing a single line of code - [📣](https://rise.cs.berkeley.edu/blog/modin-pandas-on-ray-october-2018/ "Modin (Pandas on Ray)") [🐙](https://github.com/modin-project/modin/ "Modin on GitHub") [🐍](https://pypi.org/project/modin/ "Modin on PyPi")
-   [Pandas Bokeh][2] - a Bokeh plotting backend for Pandas and GeoPandas - [🐙](https://github.com/PatrikHlobil/Pandas-Bokeh "Pandas Bokeh on GitHub") [🐍](https://pypi.org/project/pandas-bokeh/ "Pandas Bokeh on PyPi")
-   [jardin](https://jardin.readthedocs.io/en/latest/) - a `pandas.DataFrame`-based ORM - [🐙](https://github.com/instacart/jardin "jardin on GitHub") [🐍](https://pypi.org/project/jardin/ "jardin on PyPi")
-   [PrettyPandas](https://prettypandas.readthedocs.io/en/latest/) - is a Pandas DataFrame Styler class that helps you create report quality tables - [🐙](https://github.com/HHammond/PrettyPandas "PrettyPandas on GitHub") [🐍](https://pypi.org/project/prettypandas/ "PrettyPandas on PyPi")

## Links

-   [A Gentle Visual Intro to Data Analysis in Python Using Pandas][3] by Jay Alammar, 29 October 2018.
-   [Improve panda’s Excel Output][4] by Chris Moffitt, 8 April 2015.
-   [Building a Repeatable Data Analysis Process with Jupyter Notebooks ][5] by Chris Moffitt, 20 November 2018.

## Notes

-   [`pandas.io.json.json_normalize`][6] is a function to _normalize_ structured JSON into a flat `dataframe`. Useful for working with data that comes from an JSON API.

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

Usually I'm dealing with data from external sources that don't have pretty columns names. I like to use [slugify][7] to convert them to Python compatible keys.

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

### Pandas/SQL Rosetta Stone

#### `IN` / `pandas.DataFrame.isin`

```sql
SELECT * FROM table WHERE city IN ("Toronto", "Richmond Hill");
```

```python
# City is ether Toronto or Richmond Hill:
df[df['city'].isin(['Toronto', 'Richmond Hill'])]

# City is not Markdale or Oakville:
df[~df['city'].isin(['Markdale', 'Oakville'])]
```

See the pandas documentation for more information on [`pandas.DataFrame.isin`][8].

[1]:	README.md
[2]:	https://github.com/PatrikHlobil/Pandas-Bokeh
[3]:	https://jalammar.github.io/gentle-visual-intro-to-data-analysis-python-pandas/
[4]:	http://pbpython.com/improve-pandas-excel-output.html
[5]:	http://pbpython.com/notebook-process.html
[6]:	https://pandas.pydata.org/pandas-docs/stable/generated/pandas.io.json.json_normalize.html
[7]:	https://pypi.python.org/pypi/awesome-slugify
[8]:	https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.isin.html
