# FinServ Portal API

## Issues

### GET /api/issues

Returns a paginated list of issues.

**Query parameters:**

- `search` *(optional)* — filters issues by search text
- `page` *(optional)* — 1-based page number

**Response:**

```json
{
  "items": [
    {
      "id": 1,
      "title": "Payment processing timeout",
      "status": "open",
      "priority": "high"
    }
  ],
  "total": 1,
  "totalPages": 1,
  "page": 1
}
```

> **Note:** This endpoint supports filtering and returns pagination metadata.

---

## Customers

### GET /api/customers/:id

Returns customer details by ID.

**Response:**

```json
{
  "id": "C001",
  "name": "Acme Financial Corp",
  "email": "ops@acme.test",
  "tier": "enterprise",
  "balance": 120000,
  "createdAt": "2024-01-15"
}
```
