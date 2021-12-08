# Use socket methods

## Examples

```js
Application.ExternalEval("onAuth(token)");
Application.ExternalEval("sendItem(itemName)");
```

### Порядок использования скриптов

1. onAuth - передать токен после авторизации
2. reciveReward - начать слушать ивент для получения ваучера
