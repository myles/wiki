# Ansible

<dfn>Ansible</dfn> is a software that automates software provisioning, configuration management, and application deployment.

## Snippets

### Looping over a subelement

-   [Example Gist](https://gist.github.com/myles/2c1fb82c8764440756d910f981d9ff24)
-   [Ansible Documentation](https://docs.ansible.com/ansible/2.4/playbooks_loops.html#looping-over-subelements)

Variables:

```yaml
users:
  - username: myles
    shell: /bin/bash
    authorized_keys:
      - "{{ lookup('file', 'ssh_keys/myles_laptop.pub') }}"
      - "{{ lookup('file', 'ssh_keys/myles_ipad.pub') }}"
      - "{{ lookup('file', 'ssh_keys/myles_iphone.pub') }}"
```

Tasks:

```yaml
- name: add ~/.ssh/authorized_keys file for the user accounts
  authorized_key:
    user: '{{ item.0.username }}'
    key: "{{ item.1 }}"
  with_subelements:
    - '{{ users }}'
    - authorized_keys
  tags:
    - common
    - users
```
