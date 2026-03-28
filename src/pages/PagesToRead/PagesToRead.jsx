import { useLoaderData } from "react-router";
import { getStoredBooks } from "../../utility/addToDB";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Custom triangle/spike shaped bar to match the screenshot design
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  // Create a triangle path: bottom-left → top-center → bottom-right
  const path = `M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`;
  return <path d={path} fill={fill} />;
};

// Custom label on top of each bar
const renderCustomLabel = (props) => {
  const { x, y, width, value, fill } = props;
  return (
    <text
      x={x + width / 2}
      y={y - 10}
      fill={fill}
      textAnchor="middle"
      fontSize={14}
      fontWeight={600}
    >
      {value}
    </text>
  );
};

const COLORS = [
  "#3B82F6", // blue
  "#2DD4A8", // teal/green
  "#F59E0B", // orange/amber
  "#FB923C", // salmon/orange
  "#EF4444", // red
  "#8B5CF6", // purple
  "#EC4899", // pink
  "#14B8A6", // cyan-teal
  "#6366F1", // indigo
];

const PagesToRead = () => {
  const books = useLoaderData();
  const readListBooks = getStoredBooks("readList")
    .map((id) => books.find((book) => book.bookId === Number(id)))
    .filter(Boolean);

  const chartData = readListBooks.map((book) => ({
    name: book.bookName,
    totalPages: book.totalPages,
  }));

  return (
    <div>
      <div className="my-10 bg-gray-100 rounded-2xl p-10">
        {chartData.length === 0 ? (
          <p className="text-center text-gray-500 py-20 text-lg">
            No books in your read list yet. Add some books to see the chart!
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={450}>
            <BarChart
              data={chartData}
              margin={{ top: 30, right: 30, left: 0, bottom: 10 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 13, fill: "#555" }}
                axisLine={false}
                tickLine={false}
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 13, fill: "#999" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Bar
                dataKey="totalPages"
                shape={<TriangleBar />}
                label={renderCustomLabel}
                isAnimationActive={true}
                animationDuration={800}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default PagesToRead;
