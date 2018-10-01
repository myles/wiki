# DIRB

Searches all the directory contents on a website

## Usage

```shell
dirb http://192.168.0.104/ /usr/share/wordlists/dirb/big.txt
```

## Resources

* <http://tools.kali.org/web-applications/dirb>
* <https://github.com/seifreed/dirb>

# gobuster

Directory/file & DNS busting tool written in Go.

## Resources

* <https://github.com/OJ/gobuster>

# Hydra

Exploiting Username and Password forms.

## Usage

```shell
hydra 192.168.0.104 http-post-form '/imfadministrator/index.php:user=^USER^&pass=^PASS^:Invalid password' -L /root/usernames.txt -P /usr/share/wordlists/metasploit/password.lst -vV -t 10 -w 30 -o hydra-http-post-attack.txt
```

## Resources

* <http://tools.kali.org/password-attacks/hydra/>
* <https://www.blackmoreops.com/2015/12/23/crack-passwords-in-kali-linux-with-hydra/>
* <http://insidetrust.blogspot.ca/2011/08/using-hydra-to-dictionary-attack-web.html>

# sqlmap

Used for doing SQL injection stuff.

## Usage

When having to log into an PHPSESSIONID auth:

```shell
sqlmap -u http://192.168.0.104/imfadministrator/cms.php?pagename=upload --banner --cookie="PHPSESSID=m0i2uapvsqlklug2tpe2a8cis2; security=low" -f
```
