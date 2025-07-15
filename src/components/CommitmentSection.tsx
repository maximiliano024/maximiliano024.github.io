export function CommitmentSection() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-warm-orange to-golden-yellow p-8 rounded-2xl shadow-warm max-w-2xl">
            <div className="text-center text-white">
              <h4 className="text-2xl font-bold mb-4">Nuestro Compromiso</h4>
              <p className="text-lg mb-6 opacity-90">
                "Llevar productos del campo directo a familias que valoran el origen y la calidad"
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Familias Satisfechas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}