# FinServ Portal API

## Issues

### GET /api/issues

Returns paginated issues with optional search.

**Query params:**
- `search` *(optional)* – substring match on issue title.
- `page` *(optional, default: 1)* – 1-based page number (page size: 5).

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
  "total": 12,
  "totalPages": 3,
  "page": 1
}
```

Example:
```
GET /api/issues?search=payment&page=2
```

---

## Customers

### GET /api/customers/:id

Returns customer details by ID.

**Response:**

```json
{
  "id": "C001",
  "name": "Acme Financial Corp",
  "tier": "enterprise"
}
```
