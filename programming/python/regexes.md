# Useful Regular Expression

This is a list of useful regular expression I find on the internet.

## Match an email address

```python
r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
```

[PyRegex][1]

## Match an URL

```python
r"http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+"
```

[Regex101](https://regex101.com/r/Z4nfdm/1)

[1]: http://www.pyregex.com/?id=eyJyZWdleCI6IiheW2EtekEtWjAtOV8uKy1dK0BbYS16QS1aMC05LV0rXFwuW2EtekEtWjAtOS0uXSskKSIsImZsYWdzIjo4LCJtYXRjaF90eXBlIjoibWF0Y2giLCJ0ZXN0X3N0cmluZyI6Im15bGVzLmJyYWl0aHdhaXRlQGV4YW1wbGUuY29tIn0%3D
