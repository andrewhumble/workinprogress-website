import { useState } from 'react'

import * as Cards from './components/cards'

import { TPosts, TTags } from '@custeomTypes/index'
import SearchInput from './components/SearchInput'
import PostHeader from './components/Header'
import Footer from './components/Footer'
import TagList from './components/lists/TagList'
import PostList from './components/lists/PostList'

type Props = {
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ tags, posts }) => {
  const [q, setQ] = useState('')

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <TagList className="hidden lg:block col-span-2" data={tags} />
      <div className="col-span-12 lg:col-span-7">
        <Cards.MobileProfileCard />
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <TagList className="block lg:hidden" data={tags} />
        <PostHeader tags={tags} />
        <PostList q={q} posts={posts} tags={tags} />
        <Footer className="block lg:hidden flex justify-center pb-8" />
      </div>
      <div className="hidden lg:block lg:col-span-3">
        <Cards.ProfileCard />
        <Cards.ServiceCard />
        <Cards.ContactCard />
        <Footer className="pt-4" />
      </div>
    </div>
  )
} 

export default Feed
