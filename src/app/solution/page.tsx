export default function Solution() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">AI-Powered Analytics</h2>
          <p className="text-gray-600 mb-4">
            Leverage advanced AI algorithms to gain deep insights from your data.
            Our analytics platform helps you make data-driven decisions with confidence.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time data processing</li>
            <li>Predictive analytics</li>
            <li>Custom dashboards</li>
            <li>Automated reporting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Machine Learning Platform</h2>
          <p className="text-gray-600 mb-4">
            Build, train, and deploy machine learning models at scale with our
            comprehensive ML platform.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Model training and optimization</li>
            <li>MLOps integration</li>
            <li>AutoML capabilities</li>
            <li>Model monitoring and versioning</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Natural Language Processing</h2>
          <p className="text-gray-600 mb-4">
            Transform unstructured text data into actionable insights with our
            NLP solutions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Text classification and sentiment analysis</li>
            <li>Named entity recognition</li>
            <li>Language translation</li>
            <li>Conversational AI</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
