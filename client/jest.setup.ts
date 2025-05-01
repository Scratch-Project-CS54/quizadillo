import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;

if (typeof global.TextDecoder === 'undefined') {
  (global as any).TextDecoder = TextDecoder as any;
}

if (typeof global.TextEncoder === 'undefined') {
  (global as any).TextEncoder = TextEncoder as any;
}
