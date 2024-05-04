import '@/components/global.sass'

export const metadata = {
  title: "Подземелье Дракона игра-шоу |Праздник в Павлово",
  description: "Игра - шоу «Подземелье Дракона» - это отличная возможность весело провести время в кругу друзей, семьи или коллег, необычно отметить Ваш праздник!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
