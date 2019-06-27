# Jupyter

<dfn>Jupyter</dfn> Notebook (formerly IPython Notebooks) is a web-based interactive computational environment for creating Jupyter notebooks documents.


## Libraries

-   [Jupyter Dashboards Layout Extension](http://jupyter-dashboards-layout.readthedocs.io/) - [:octopus:](https://github.com/jupyter/dashboards "Jupyter Dashboard on GitHub") [:snake:](https://pypi.org/project/jupyter_dashboards/ "Jupyter Dashboard on PyPi")
-   [voilà](https://voila.readthedocs.io/) - Voilà allows you to convert a Jupyter Notebook into an interactive dashboard that allows you to share your work with others. It is secure and customizable, giving you control over what your readers experience. - [:octopus:](https://github.com/QuantStack/voila/ "voilà on GitHub") [:snake:](https://pypi.org/project/voila/ "voilà on PyPi")
-   [calmap](https://pythonhosted.org/calmap) - plot pandas time series data sampled by day in a heatmap per calendar year, similar to GitHub's contributions plot, using matplotlib - [:octopus:](https://github.com/martijnvermaat/calmap "calmap on GitHub") [:snake:](https://pypi.org/project/calmap/ "calmap on PyPi")
-   [nbresuse](https://github.com/yuvipanda/nbresuse "nbresuse on GitHub") - A small extension for Jupyter Notebooks that displays an indication of how much resources your current notebook server and its children (kernels, terminals, etc) are using. - [:octopus:](https://github.com/martijnvermaat/nbresuse "nbresuse on GitHub") [:snake:](https://pypi.org/project/nbresuse/ "nbresuse on PyPi")


## Links

-   [Building a Repeatable Data Analysis Process with Jupyter Notebooks](http://pbpython.com/notebook-process.html) by Chris Moffitt, 20 November 2018.

## Snippets

### Useful magic commands

The `%run` commands runs a Python script inside the notebook:

```python
%run file.py
```

The `%%writefile` writes the conents of a cell to a file:

```python
%%writefile

def to_upper(x: str):
    return x.upper()
```
