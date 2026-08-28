'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

function PostCard({ post }: { post: any }) {
  const [likes, setLikes] = useState(post.initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput.trim()]);
      setCommentInput('');
    }
  };

  return (
    <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: post.avatarColor }}></div>
        <div>
          <h4 style={{ margin: 0 }}>{post.author}</h4>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{post.content}</p>
        </div>
      </div>
      {post.image && (
        <img src={post.image} style={{ width: '100%', borderRadius: '4px' }} alt="Post media" />
      )}
      
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
        <span style={{ cursor: 'pointer', color: hasLiked ? '#ff4b4b' : 'inherit' }} onClick={handleLike}>
          {hasLiked ? '❤️' : '🤍'} {likes.toLocaleString()}
        </span>
        <span style={{ cursor: 'pointer' }}>💬 {post.initialComments + comments.length} Comments</span>
        <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
          <span style={{ cursor: 'pointer', color: '#0088cc' }}>↗ Telegram</span>
          <span style={{ cursor: 'pointer', color: '#1877F2' }}>↗ Facebook</span>
          <span style={{ cursor: 'pointer', color: '#ff0050' }}>↗ TikTok</span>
        </div>
      </div>

      {comments.length > 0 && (
        <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-panel)', borderRadius: '8px' }}>
          {comments.map((c, i) => (
            <div key={i} style={{ fontSize: '0.85rem', marginBottom: '0.5rem', borderBottom: i !== comments.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingBottom: '0.5rem' }}>
              <strong>You:</strong> {c}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <input 
          type="text" 
          placeholder="Add a comment..." 
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleComment()}
          style={{ flex: 1, padding: '0.5rem', borderRadius: '20px', border: '1px solid var(--border-color, #333)', background: 'var(--bg-panel)', color: 'white' }} 
        />
        <button 
          onClick={handleComment}
          style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', cursor: 'pointer' }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default function Community() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const posts = [
    {
      id: 1,
      author: 'Cyber_Ninja',
      avatarColor: 'var(--accent-primary)',
      content: 'Just earned the "Neon God" achievement in Cyber Hunter 2077!',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      initialLikes: 452,
      initialComments: 24
    },
    {
      id: 2,
      author: 'Davial Official',
      avatarColor: '#3b82f6',
      content: 'Patch 2.1 is now live for Space Recon! Check out the new zero-gravity mechanics.',
      image: null,
      initialLikes: 1204,
      initialComments: 156
    }
  ];

  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Community Activity</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {user?.role === 'admin' && (
                <button 
                  className="btn-play" 
                  style={{ background: 'var(--accent-secondary)', border: 'none', color: 'white', padding: '0.5rem 1rem' }} 
                  onClick={() => router.push('/dashboard/admin')}
                >
                  Admin Panel
                </button>
              )}
              {user && (
                <button 
                  className="btn-play" 
                  style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', padding: '0.5rem 1rem' }} 
                  onClick={() => { logout(); router.push('/login'); }}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

