import { Shield, Zap, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const PaymentCard = () => {
  const [copied, setCopied] = useState(false);
  const binanceId = '1045910133';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(binanceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="bg-white py-12 shadow-lg" data-payment-card>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Accepted Payment Method
            </h3>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Fast, secure, and anonymous cryptocurrency payments accepted via Binance
            </p>
          </div>

          {/* Crypto Payment Highlight */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                Crypto Payment
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Binance Payment</h4>
              <p className="text-gray-600 mb-6">Secure and fast cryptocurrency transactions</p>

              <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-lg">
                <p className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Binance ID</p>

                <div className="flex items-center justify-center gap-3 mb-3">
                  <p className="text-3xl font-bold text-orange-600 font-mono">{binanceId}</p>
                  <button
                    onClick={copyToClipboard}
                    className={`p-2 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${
                      copied
                        ? 'bg-green-100 text-green-600'
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                    }`}
                    title={copied ? 'Copied!' : 'Copy to clipboard'}
                  >
                    {copied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-400">
                  {copied ? 'Copied to clipboard!' : 'Click to copy Binance ID'}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6 text-green-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Secure & Protected Transactions</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
