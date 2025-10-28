export default function AuricAI() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Auric AI</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <p className="text-gray-600 leading-relaxed">
            Auric AI is built on cutting-edge artificial intelligence technology,
            designed to deliver exceptional results for businesses of all sizes.
            Our platform combines deep learning, natural language processing,
            and computer vision to solve complex business challenges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Advanced AI Models</h3>
              <p className="text-gray-600">
                State-of-the-art models trained on diverse datasets for
                accurate and reliable predictions.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-600">
                Cloud-native architecture that scales with your business needs.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600">
                RESTful APIs and SDKs for seamless integration with your
                existing systems.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated support team available around the clock to help you
                succeed.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">Customer Service Automation</h3>
              <p className="text-gray-600">
                Reduce response times and improve customer satisfaction with
                AI-powered chatbots.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">Document Processing</h3>
              <p className="text-gray-600">
                Automate document classification, extraction, and analysis.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">Predictive Maintenance</h3>
              <p className="text-gray-600">
                Prevent equipment failures and optimize maintenance schedules.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
