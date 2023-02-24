// Основний модуль
import gulp from "gulp";
// Імпорт шляхів
import { path } from "./gulp/config/path.js";
// Імпорт загальних плагінів
import { plugins } from "./gulp/config/plagins.js";

// Передаємо значення в глобальну змінну
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

// Спостерігач за змінами в файлі
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Основні задачі
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Побудова сценаріїв виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev }
export { build }

// Виконання сценарію за замовчуванням
gulp.task('default', dev);


import ghPages from 'gulp-gh-pages';


gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});