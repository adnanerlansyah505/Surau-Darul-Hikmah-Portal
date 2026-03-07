import type { CollectionEntry } from 'astro:content';
import { motion } from 'framer-motion';

type BlogPost = CollectionEntry<'blog'>;

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  if (!posts?.length) {
    return (
      <p className="text-sm text-slate-600">
        Artikel akan dikemas kini tidak lama lagi. Nantikan perkongsian terkini daripada Surau
        Darul Hikmah.
      </p>
    );
  }

  const sorted = [...posts].sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((post, index) => (
        <motion.a
          key={post.id}
          href={`/blog/${post.slug}/`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-900 shadow-md shadow-slate-200/80 transition-colors hover:border-primary/50 hover:bg-primary/3"
        >
          <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500">
            <span className="rounded-full bg-primary/10 px-2 py-1 font-medium text-primary">
              Artikel
            </span>
            <span>
              {new Date(post.data.date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-primary">
            {post.data.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-xs text-slate-600 sm:text-sm">
            {post.data.description}
          </p>
          {post.data.author && (
            <p className="mt-3 text-[11px] text-slate-500">
              Oleh <span className="font-medium">{post.data.author}</span>
            </p>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default BlogGrid;

