# Organizing Data Science Projects

This is a living document\[^1] on how I organize and manage my [Data Science](./README.md) projects.

\[^1]:  A document that is continually edited and updated.

## Folder Structor

```bash
project/
├── Pipfile
├── Pipfile.lock
├── archive/
├── data/
│   ├── interim/
│   ├── output/
│   └── source/
├── 000_Dashboard.ipynb
├── 001_Clean_Data.ipynb
├── shared.py
```

*   `Pipfile` & `Pipfile.lock` for any required third-party Python libraries.
*   I use the `archive/` directory to store Jupyter Notebooks that didn't really work out. I find it incredibly useful to save old work and an average Jupyter Notebook file costs less than a penne of disk space.
*   `data/` contains three folders, `source/` for the orignal data, `interim/` for data frames that have been muniplulated during the analysis, and `output/` for the final data.
*   I use the `000_Dashboard.ipynb` notebook file to have a place to run quick statistics of the data set. I think of it as a FAQ for the data.
*   The Python file `shared.py` is used for things that can be shared across all notebooks.

## Sharing

I like to use Git and GitHub for sharing projects, but recently my average dataset has grown larger than Git and GitHub can handle. I'm thinkg of moving to a Git for source control over Jupyter Notebooks and Python files and S3 for hosting data files.
