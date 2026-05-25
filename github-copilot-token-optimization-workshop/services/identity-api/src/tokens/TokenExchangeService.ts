export interface TokenExchangeRequest {
  subjectToken: string;
  requestedAudience: "payments-api" | "claims-api" | "admin-portal";
}

export interface TokenExchangeResponse {
  accessToken: string;
  expiresInSeconds: number;
}

export function exchangeToken(request: TokenExchangeRequest): TokenExchangeResponse {
  return {
    accessToken: `demo-token-for-${request.requestedAudience}`,
    expiresInSeconds: 900
  };
}
