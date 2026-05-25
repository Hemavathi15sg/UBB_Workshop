# Claims API

## Existing Endpoint

`GET /claims/{claimId}/status` returns the current claim status envelope.

## Error Format

```json
{
  "error": "CLAIM_NOT_FOUND",
  "message": "Claim clm_123 was not found"
}
```
