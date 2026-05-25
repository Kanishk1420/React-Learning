import { useDispatch, useSelector } from 'react-redux'
import { fetchphotos, fetchVideos, fetchgifs } from '../api/mediaApi'
import { setLoading, setError, setResults, setTenorNext } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'
import Pagination from './Pagination'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error, page, tenorPos } = useSelector((store) => store.search)

    useEffect(function () {
        if (!query) return 
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchphotos(query, page)                    
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query, page)
                    

                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }
                if (activeTab == 'gif') {
                    let response = await fetchgifs(query, tenorPos)

                    data = response.results.map((item) => ({
                        id: item.id,
                        title: item.title || 'GIF',
                        type: 'gif',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                        url:item.url
                    }))

                    dispatch(setTenorNext(response.next || ''))

                }
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab,dispatch, page, tenorPos])

    if (error) return <h1 className='flex justify-center'>Error</h1>
    if (loading) return <h1 className='flex justify-center'>Loading...</h1>  
    if (results.length == 0) return <h1 className='flex justify-center'>No Results Found</h1> 
    return (
        <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
            <Pagination />
        </div>
    )
}

export default ResultGrid