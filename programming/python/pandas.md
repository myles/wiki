# pandas

<dfn>pandas</dfn> is a [Python](README.md) library for data manipulation and analysis.

## Links

*   [A Gentle Visual Intro to Data Analysis in Python Using Pandas](https://jalammar.github.io/gentle-visual-intro-to-data-analysis-python-pandas/), by Jay Alammar

## Notes

-   [`pandas.io.json.json_normalize`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.io.json.json_normalize.html) is a function to _normalize_ structured JSON into a flat `dataframe`. Useful for working with data that comes from an JSON API.

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

Usually I'm dealing with data from external sources that don't have pretty columns names. I like to use [slugify](https://pypi.python.org/pypi/awesome-slugify) to convert them to Python compatible keys.

```python
from slugify import slugify

df.columns = [slugify(c, separator="_", to_lower=True) for c in df.columns]
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

See the pandas documentation for more information on [`pandas.DataFrame.isin`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.isin.html).
