import Sidebar from "components/Side/Side";

export function ConfigPage() {
  return(
    <div className="flex">
      <Sidebar />
      <div className="container mx-3 mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              Configurações
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
