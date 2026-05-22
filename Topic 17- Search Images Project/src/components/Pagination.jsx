import { setPage, setTenorPos, setTenorHistory } from '../redux/features/searchSlice'
import { useSelector, useDispatch } from 'react-redux'
const Pagination = () => {
const { page, results, activeTab, tenorNext, tenorHistory, tenorPos } = useSelector((state) => state.search)
const dispatch = useDispatch()
const isGifTab = activeTab === 'gif'
const canGoPrevGif = isGifTab && tenorHistory.length > 0
const canGoNextGif = isGifTab && Boolean(tenorNext)
const canGoPrev = isGifTab ? canGoPrevGif : page > 1
const canGoNext = isGifTab ? canGoNextGif : results.length > 0
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: canGoPrev ? 1 : 0.5, cursor: canGoPrev ? "pointer" : "not-allowed" }}
          className="bg-blue-700 text-white rounded px-4 py-2 text-sm cursor-pointer uppercase"
          onClick={() => {
              if (!canGoPrev) return
              if (isGifTab) {
                  const prevToken = tenorHistory[tenorHistory.length - 1]
                  const nextHistory = tenorHistory.slice(0, -1)
                  dispatch(setTenorPos(prevToken || ''))
                  dispatch(setTenorHistory(nextHistory))
                  dispatch(setPage(page - 1))
                  return
              }

              dispatch(setPage(page - 1))
            }}
            >
          Prev
        </button>
        <h2>{page}</h2>
        <button
          style={{ opacity: canGoNext ? 1 : 0.5, cursor: canGoNext ? "pointer" : "not-allowed" }}
          className="bg-blue-700 text-white rounded px-4 py-2 text-sm cursor-pointer uppercase"
          onClick={() => {
              if (!canGoNext) return
              if (isGifTab) {
                  dispatch(setTenorHistory([...tenorHistory, tenorPos]))
                  dispatch(setTenorPos(tenorNext))
                  dispatch(setPage(page + 1))
                  return
              }

              dispatch(setPage(page + 1))
            }}
            >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination