# Purpose

This repo is inspired to help answer this question http://stackoverflow.com/questions/43920942/unexpected-outcome-of-node-js-vs-asp-net-core-performance-test/44073433

## Node.js

```
$ node index.js

$ wrk -t100 -c100 -d10s http://localhost:8000
Running 10s test @ http://localhost:8000
  100 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.01s    10.14ms   1.16s    99.57%
    Req/Sec     0.13      0.34     1.00     86.77%
  922 requests in 10.09s, 89.14KB read
Requests/sec:     91.34
Transfer/sec:      8.83KB
```

## dotnet-sync

```
$ dotnet run -c Release

$ wrk -t100 -c100 -d10s http://localhost:5000
Running 10s test @ http://localhost:5000
  100 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.08s    74.62ms   1.15s   100.00%
    Req/Sec     0.00      0.00     0.00    100.00%
  62 requests in 10.07s, 5.57KB read
  Socket errors: connect 0, read 0, write 0, timeout 54
Requests/sec:      6.16
Transfer/sec:     566.51B
```

## dotnet-async

```
$ dotnet run -c Release

$ wrk -t100 -c100 -d10s http://localhost:5000
Running 10s test @ http://localhost:5000
  100 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.01s    19.84ms   1.16s    98.26%
    Req/Sec     0.12      0.32     1.00     88.06%
  921 requests in 10.09s, 82.75KB read
Requests/sec:     91.28
Transfer/sec:      8.20KB
```
