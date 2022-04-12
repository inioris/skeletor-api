export interface TokenConfig {
  serviceKey: string;
  secretKey: string;
  expireIn: number;
  type: 'user' | 'service';
}
