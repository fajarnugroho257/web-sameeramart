export default function Loading() {
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
        <div>
            <div className="mx-auto w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-base">Silahkan tunggu...</p>
        </div>
    </div>
    )
}