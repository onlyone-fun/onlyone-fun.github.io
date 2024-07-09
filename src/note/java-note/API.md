---
icon: pen-to-square
date: 2024-07-04
category:
  - Java
tag:
  - API
---

# API总结

## Set

### 操作

- `add(E e)`：向集合中添加指定元素（如果该元素尚不存在）。
- `addAll(Collection<? extends E> c)`：将指定集合中的所有元素添加到此集合中（如果尚未存在）。
- `clear()`：移除集合中的所有元素。
- `contains(Object o)`：如果集合中包含指定的元素，则返回 `true`。
- `containsAll(Collection<?> c)`：如果此集合包含指定集合中的所有元素，则返回 `true`。
- `isEmpty()`：如果集合不包含任何元素，则返回 `true`。
- `iterator()`：返回在此集合的元素上进行迭代的迭代器。
- `remove(Object o)`：如果集合中存在指定的元素，则将其移除。
- `removeAll(Collection<?> c)`：移除集合中那些也包含在指定集合中的元素。
- `retainAll(Collection<?> c)`：仅保留集合中那些包含在指定集合中的元素。
- `size()`：返回集合中的元素个数。
- `toArray()`：返回包含集合中所有元素的数组。
- `toArray(T[] a)`：返回包含集合中所有元素的数组；返回数组的运行时类型是指定数组的类型。

## Map

在Java中，`Map`接口及其实现类（如`HashMap`、`TreeMap`、`LinkedHashMap`等）提供了丰富的API用于操作键值对数据。以下是一些常用的`Map`接口的API及其解释：



### 基本操作

- **put(K key, V value)**: 将指定的键与指定的值关联。如果该键已存在，则替换其对应的值。

  ```java
  Map<String, Integer> map = new HashMap<>();
  map.put("one", 1);
  map.put("two", 2);
  ```

- **get(Object key)**: 返回指定键所映射的值，如果此映射不包含该键的映射关系，则返回 `null`。

  ```java
  Integer value = map.get("one"); // 返回 1
  ```

- **remove(Object key)**: 如果存在，移除键的映射关系。

  ```java
  map.remove("one");
  ```

- **containsKey(Object key)**: 如果此映射包含指定键的映射关系，则返回 `true`。

  ```java
  boolean contains = map.containsKey("one"); // 返回 false
  ```

- **containsValue(Object value)**: 如果此映射为一个或多个键映射指定值，则返回 `true`。

  ```java
  boolean contains = map.containsValue(2); // 返回 true
  ```

- **size()**: 返回映射中的键值对数量。

  ```java
  int size = map.size(); // 返回 1
  ```

- **isEmpty()**: 如果此映射不包含键值对，则返回 `true`。

  ```java
  boolean empty = map.isEmpty(); // 返回 false
  ```

- **clear()**: 移除所有的键值对。

  ```java
  map.clear();
  ```



### 遍历操作

- **keySet()**: 返回所有键的集合。

  ```java
  Set<String> keys = map.keySet();
  ```

- **values()**: 返回所有值的集合。

  ```java
  Collection<Integer> values = map.values();
  ```

- **entrySet()**: 返回所有键值对的集合。

  ```java
  Set<Map.Entry<String, Integer>> entries = map.entrySet();
  ```

- **forEach(BiConsumer<? super K, ? super V> action)**: 对每个键值对执行给定的操作。

  ```java
  map.forEach((key, value) -> System.out.println(key + ": " + value));
  ```



### 其他操作

- **putAll(Map<? extends K, ? extends V> m)**: 将指定映射的所有映射关系复制到此映射中。

  ```java
  Map<String, Integer> anotherMap = new HashMap<>();
  anotherMap.put("three", 3);
  map.putAll(anotherMap);
  ```

- **getOrDefault(Object key, V defaultValue)**: 返回指定键所映射的值；如果此映射不包含该键的映射关系，则返回默认值。

  ```java
  Integer value = map.getOrDefault("four", 0); // 返回 0
  ```

- **compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)**: 对于指定键及其当前映射值（如果有），尝试计算一个新值并将其与该键关联。

  ```java
  map.compute("one", (key, val) -> (val == null) ? 1 : val + 1);
  ```

- **computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)**: 如果指定键尚未与值关联，则尝试使用给定的映射函数计算其值并将其放入映射中。

  ```java
  map.computeIfAbsent("five", k -> 5); // 如果 "five" 不存在则添加键值对 "five"=5
  ```

- **computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)**: 如果指定键的值存在且非空，则尝试重新计算其值并更新映射。

  ```java
  map.computeIfPresent("two", (key, val) -> val * 2); // "two"=4
  ```

- **merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)**: 如果指定的键尚未与值关联或者与`null`关联，则将其与给定值关联。否则，将当前值与给定值合并，并将合并后的结果存储在映射中。

  ```java
  map.merge("two", 3, (oldValue, newValue) -> oldValue + newValue); // "two"=7
  ```

## Collections Utils

### 排序和重新排列

- **sort(List<T> list)**: 对指定列表按升序进行排序。

  ```java
  List<String> list = new ArrayList<>(Arrays.asList("banana", "apple", "cherry"));
  Collections.sort(list); // 输出: [apple, banana, cherry]
  ```

- **sort(List<T> list, Comparator<? super T> c)**: 对指定列表按指定比较器进行排序。

  ```java
  List<String> list = new ArrayList<>(Arrays.asList("banana", "apple", "cherry"));
  Collections.sort(list, Comparator.reverseOrder()); // 输出: [cherry, banana, apple]
  ```

- **reverse(List<?> list)**: 反转指定列表中元素的顺序。

  ```java
  List<String> list = new ArrayList<>(Arrays.asList("banana", "apple", "cherry"));
  Collections.reverse(list); // 输出: [cherry, apple, banana]
  ```

- **shuffle(List<?> list)**: 使用默认随机源随机排列指定列表中的元素。

  ```java
  List<String> list = new ArrayList<>(Arrays.asList("banana", "apple", "cherry"));
  Collections.shuffle(list);// 输出: 随机顺序
  ```

- **shuffle(List<?> list, Random rnd)**: 使用指定的随机源随机排列指定列表中的元素。

  ```java
  List<String> list = new ArrayList<>(Arrays.asList("banana", "apple", "cherry"));
  Random random = new Random();
  Collections.shuffle(list, random);// 输出: 随机顺序
  ```

### 最值操作

- **min(Collection<? extends T> coll)**: 根据元素的自然顺序，返回给定集合中的最小元素。

  ```java
  List<Integer> list = Arrays.asList(3, 1, 4, 1, 5);
  int min = Collections.min(list);// 输出: 1
  ```

- **min(Collection<? extends T> coll, Comparator<? super T> comp)**: 根据指定比较器，返回给定集合中的最小元素。

  ```java
  List<String> list = Arrays.asList("banana", "apple", "cherry");
  String min = Collections.min(list, Comparator.reverseOrder()); // 输出: cherry
  ```

- **max(Collection<? extends T> coll)**: 根据元素的自然顺序，返回给定集合中的最大元素。

  ```java
  List<Integer> list = Arrays.asList(3, 1, 4, 1, 5);
  int max = Collections.max(list);// 输出: 5
  ```

- **max(Collection<? extends T> coll, Comparator<? super T> comp)**: 根据指定比较器，返回给定集合中的最大元素。

  ```java
  List<String> list = Arrays.asList("banana", "apple", "cherry");
  String max = Collections.max(list, Comparator.reverseOrder());// 输出: apple
  ```

### 频率和判定操作

- **frequency(Collection<?> c, Object o)**: 返回指定集合中等于指定对象的元素数。

  ```java
  List<String> list = Arrays.asList("apple", "banana", "apple", "cherry");
  int freq = Collections.frequency(list, "apple"); // 输出: 2
  ```

- **disjoint(Collection<?> c1, Collection<?> c2)**: 如果两个指定集合没有相同的元素，则返回 true。

  ```java
  List<String> list1 = Arrays.asList("apple", "banana");
  List<String> list2 = Arrays.asList("cherry", "date");
  boolean disjoint = Collections.disjoint(list1, list2);(disjoint); // 输出: true
  ```

### 同步和不可修改视图

- **synchronizedCollection(Collection<T> c)**: 返回由指定集合支持的同步（线程安全）集合。

  ```java
  Collection<String> syncCollection = Collections.synchronizedCollection(new ArrayList<>());
  syncCollection.add("apple");
  ```

- **synchronizedList(List<T> list)**: 返回由指定列表支持的同步（线程安全）列表。

  ```java
  List<String> syncList = Collections.synchronizedList(new ArrayList<>());
  syncList.add("apple");
  ```

- **synchronizedSet(Set<T> s)**: 返回由指定集合支持的同步（线程安全）集合。

  ```java
  Set<String> syncSet = Collections.synchronizedSet(new HashSet<>());
  syncSet.add("apple");
  ```

- **synchronizedMap(Map<K,V> m)**: 返回由指定映射支持的同步（线程安全）映射。

  ```java
  Map<String, String> syncMap = Collections.synchronizedMap(new HashMap<>());
  syncMap.put("key", "value");
  ```

### 不可修改视图

- **unmodifiableCollection(Collection<? extends T> c)**: 返回指定集合的不可修改视图。

  ```java
  Collection<String> unmodifiableCollection = Collections.unmodifiableCollection(new ArrayList<>());
  // unmodifiableCollection.add("apple"); 
  // 这将抛出 UnsupportedOperationException
  ```

- **unmodifiableList(List<? extends T> list)**: 返回指定列表的不可修改视图。

  ```java
  List<String> unmodifiableList = Collections.unmodifiableList(new ArrayList<>());
  // unmodifiableList.add("apple"); 
  // 这将抛出 UnsupportedOperationException
  ```

- **unmodifiableSet(Set<? extends T> s)**: 返回指定集合的不可修改视图。

  ```java
  Set<String> unmodifiableSet = Collections.unmodifiableSet(new HashSet<>());
  // unmodifiableSet.add("apple"); 
  // 这将抛出 UnsupportedOperationException
  ```

- **unmodifiableMap(Map<? extends K,? extends V> m)**: 返回指定映射的不可修改视图。

  ```java
  Map<String, String> unmodifiableMap = Collections.unmodifiableMap(new HashMap<>());
  // unmodifiableMap.put("key", "value"); 
  // 这将抛出 UnsupportedOperationException
  ```

## Arrays Utils

**sort(T[] a)**: 对指定数组按升序进行排序。

```java
String[] array = {"banana", "apple", "cherry"};
Arrays.sort(array);// 输出: [apple, banana, cherry]
```

**sort(T[] a, Comparator<? super T> c)**: 对指定数组按指定比较器进行排序。

```java
String[] array = {"banana", "apple", "cherry"};
Arrays.sort(array, Comparator.reverseOrder());// 输出: [cherry, banana, apple]
```

**binarySearch(T[] a, T key)**: 使用二分搜索法在数组中查找键值。如果找到返回索引，否则返回 -1。

```java
String[] array = {"apple", "banana", "cherry"};
int index = Arrays.binarySearch(array, "banana");// 输出: 1
```

**fill(T[] a, T val)**: 用指定值填充整个数组。

```java
String[] array = new String[3];
Arrays.fill(array, "apple");// 输出: [apple, apple, apple]
```

**equals(Object[] a, Object[] a2)**: 如果两个数组相等，返回 true。

```java
String[] array1 = {"apple", "banana"};
String[] array2 = {"apple", "banana"};
boolean equal = Arrays.equals(array1, array2); // 输出: true
```

**copyOf(T[] original, int newLength)**: 复制指定数组，截取或用 `null` 填充以适应新的长度。

```java
String[] array = {"apple", "banana"};
String[] copy = Arrays.copyOf(array, 3); // 输出: [apple, banana, null]
```

**asList(T... a)**: 返回由指定数组支持的固定大小的列表。

```java
String[] array = {"apple", "banana"};
List<String> list = Arrays.asList(array);// 输出: [apple, banana]
```

**toString(T[] a)**: 返回数组内容的字符串表示形式。

```java
String[] array = {"apple", "banana"};
String str = Arrays.toString(array);// 输出: [apple, banana]
```



## stream流使用



### 创建stream

- 集合中创建：`List.stream()`、`Set.stream()`、`Map.entrySet().stream()`
- 数组中创建：`Arrays.stream()`
- 使用`Stream.of()`



### 中间操作

- `filter`:过滤操作
- `map`:对元素进行映射
- `distinct`:去除重复元素
- `sorted`:对元素排序
- `limit`:截断流，使其最多包含指定数量的元素



### 终端操作

- `foreach`:对每个元素执行操作

- `collect`:将元素收集道集合或其他数据结构中

- `toArray`:将流中的元素转换为数组

- `reduce`:对元素进行规约操作(是一种将流中的元素组合成单一结果的操作,常见的归约操作包括求和、求积、找到最大/最小值等)

  ``` java
  List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
  
  // 使用reduce()求和
  Optional<Integer> sum = numbers.stream()
                                 .reduce((a, b) -> a + b);
  
  // 打印结果
  sum.ifPresent(System.out::println); // 输出：15
  ```

  

- `min`、`max`:找到流中的最小和最大元素

- `count`:返回流中元素数量

- `anyMatch`、`allMatch`、`noneMatch`:判断流中是否有任意、全部、没有元素匹配给定的条件

- `findFirst`、`findAny`:返回流中的第一个元素或任意元素



### 并行流操作

- 使用`parallel`将串行流转换为并行流，从而充分利用多核处理器



### 自定义操作

- 使用`stream.generate()`、`stream.iterate()`创建自定义流
- 使用`stream.concat()`合并两个流

### Optional类

- `findFirst()`等终端操作可能返回Optional，用于防止 null 引用的方式，强制进行空值检查



## Streams Utils

**concat(Stream<? extends T> a, Stream<? extends T> b)**: 合并两个流。

```java
Stream<String> stream1 = Stream.of("apple", "banana");
Stream<String> stream2 = Stream.of("cherry", "date");
Stream<String> combinedStream = Stream.concat(stream1, stream2);
// 输出: apple banana cherry date
```

**of(T... values)**: 返回包含指定值的顺序流。

```java
Stream<String> stream = Stream.of("apple", "banana", "cherry");
// 输出: apple banana cherry
```

**builder()**: 返回一个新的 `Stream.Builder`。

```java
Stream.Builder<String> builder = Stream.builder();
builder.add("apple").add("banana").add("cherry");
Stream<String> stream = builder.build();
// 输出: apple banana cherry
```

**empty()**: 返回一个空的顺序流。

```java
Stream<String> emptyStream = Stream.empty();
int count = emptyStream.count()); // 输出: 0
```

**generate(Supplier<T> s)**: 返回一个无限顺序无序流，其元素由提供的 `Supplier` 生成。

```java
Stream<Double> randomNumbers = Stream.generate(Math::random).limit(3);
// 输出: 三个随机数
```

**iterate(T seed, UnaryOperator<T> f)**: 返回一个无限顺序有序流，其元素由递归地应用给定函数生成，产生的流中第一个元素是提供的初始元素。

```java
Stream<Integer> integers = Stream.iterate(0, n -> n + 2).limit(5);
// 输出: 0 2 4 6 8
```
